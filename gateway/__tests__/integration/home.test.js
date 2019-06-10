const app = require('../../src/app');

const supertest = require('supertest');
const request = supertest(app);

describe('Home', () => {
	it('should return 401 without jwt', async () => {
		const response = await request.get('/home');

		expect(response.status).toBe(401);
	})
});