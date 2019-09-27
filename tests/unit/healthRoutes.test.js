const httpMocks = require('node-mocks-http');

const healthRoutes = require('../../src/routes/health/healthRoutes');
const status = require('../mockData/status.json');

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe('healthRoutes.getStatus', () => {
  it('should have a getStatus function', () => {
    expect(typeof healthRoutes.getStatus).toBe('function');
  });

  it('should return 200 status code', () => {
    healthRoutes.getStatus(req, res, next);

    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return json body in response', () => {
    healthRoutes.getStatus(req, res, next);

    expect(res._getJSONData()).toStrictEqual({ data: [status] });
    expect(res._isEndCalled).toBeTruthy();
  });
});
