const request = require('supertest');
const app = require('../src/index');

describe('Application de test', () => {
  it('health check should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  it('merge endpoint should work', async () => {
    const response = await request(app).get('/merge');
    expect(response.status).toBe(200);
    expect(response.body.merged).toBeDefined();
  });
});
