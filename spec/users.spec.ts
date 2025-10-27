import request from 'supertest';
import express from 'express';
import usersRouter from '../src/routes/users';

const app = express();
app.use(express.json());
app.use('/users', usersRouter);

function randomString(length: number) {
  return Math.random().toString(36).substring(2, 2 + length);
}

describe('Users API', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return a user by ID', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('should create a user', async () => {
    const firstName = 'Test' + randomString(5);
    const lastName = 'User' + randomString(5);

    const res = await request(app)
      .post('/users')
      .send({ firstName, lastName, password: '123' });

    expect(res.status).toBe(201);
    expect(res.body.firstname).toBe(firstName);
    expect(res.body.lastname).toBe(lastName);
  });
});
