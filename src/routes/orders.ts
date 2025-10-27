import express from 'express';
import { pool } from './db';
const router = express.Router();

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Get the active order for the user
    const orderResult = await pool.query(
      'SELECT * FROM orders WHERE user_id = $1 AND status = $2',
      [userId, 'active']
    );
    if (orderResult.rows.length === 0) {
      return res.status(404).send('No active order found');
    }

    const order = orderResult.rows[0];

    // Get products for this order
    const productsResult = await pool.query(
      `SELECT p.id, p.name, p.price, op.quantity
       FROM order_products op
       JOIN products p ON p.id = op.product_id
       WHERE op.order_id = $1`,
      [order.id]
    );

    res.json({
      orderId: order.id,
      userId: order.user_id,
      status: order.status,
      products: productsResult.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
