const { apiRequest, GET, POST, DELETE, PUT } = require('../../api-test-suite');

describe('health.routes', () => {
    describe('GET /health', () => {
        test('returns 200 status and hello world message', async () => {
            const response = await apiRequest(GET, '/health');
            expect(response.status).toBe(200);
            expect(response.message).toBe('Hello World');
        });
    });
});
