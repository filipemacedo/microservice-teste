const supertest = require('supertest');

const app = require('../../src/app');

const { User } = require('../../src/app/models');

const request = supertest(app);

describe('Store', () => {
  it('should return sign-up success', async () => {
    const { body, status } = await request
      .post('/sign-up')
      .send({
        name: 'Filipe Luiz',
        email: 'usarmock@gmail.com',
        password: '1234567'
      });

    expect(status).toBe(200);
  });

  it('should return sign-in success with valid credentials', async () => {
    const { body, status } = await request
      .post('/sign-in')
      .send({
        email: 'usarmock@gmail.com',
        password: '1234567'
      });

    expect(status).toBe(200);
  });

  it('should return sign-in failed with invalid credentials', async () => {
    const { body, status } = await request
      .post('/sign-in')
      .send({
        email: 'usarmock@gmail.com',
        password: '12345678'
      });
      
    expect(status).toBe(401);
  });

  it('should return success with valid jwt', async () => {
    const user = await User.create({
      name: 'Filipe Luiz',
      email: 'usarmock@gmail.com',
      password: '1234567'
    })

    const { body, status } = await request
      .get('/authenticate')
      .set('Authorization', `Bearer ${user.generateToken()}`);
    
    expect(status).toBe(200);
    expect(body.isAuthenticate).toBe(true);
  })

  it('should return success with invalid jwt', async () => {
    const { body, status } = await request
      .get('/authenticate')
      .set('Authorization', `Bearer 203999`);
    
    expect(status).toBe(401);
    expect(body.isAuthenticate).toBe(false);
  })
});