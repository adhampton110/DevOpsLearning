const request = require('supertest');
const app = require('../app');

let server;

beforeAll((done) => {
  server = app.listen(0, () => {
    const { port } = server.address();
    console.log(`Test server running on port ${port}`);
    done();
  });
});


afterAll((done) => {
    server.close(done);
    });


describe('GET /', () => {
    test('should respond with status code 200', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  
    test('should render home view', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('Welcome');
    });
  });

describe('GET /devops_overview', () => {
    test('should respond with status code 200', async () => {
        const response = await request(server).get('/devops_overview');
        expect(response.statusCode).toBe(200);
    });

    test('should render devops_overview view', async () => {
        const response = await request(server).get('/devops_overview');
        expect(response.text).toContain('devops_overview');
    });
});
  
describe('GET /infrastructure_as_code', () => {
    test('should respond with status code 200', async () => {
        const response = await request(server).get('/infrastructure_as_code');
        expect(response.statusCode).toBe(200);
    });

    test('should render infrastructure_as_code view', async () => {
        const response = await request(server).get('/infrastructure_as_code');
        expect(response.text).toContain('infrastructure_as_code');
    });
});

describe('GET /continuous_integration/ci_overview', () => {
  test('should respond with status code 200', async () => {
      const response = await request(server).get('/continuous_integration/ci_overview');
      expect(response.statusCode).toBe(200);
  });

  test('should render infrastructure_as_code view', async () => {
      const response = await request(server).get('/continuous_integration/ci_overview');
      expect(response.text).toContain('key-concepts-in-continuous-integration');
  });
});

describe('GET /invalid-url', () => {
    test('should respond with status code 404', async () => {
        const response = await request(server).get('/invalid-url');
        expect(response.statusCode).toBe(404);
    });
});
