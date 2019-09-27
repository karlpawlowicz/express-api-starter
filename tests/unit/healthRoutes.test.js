const httpMocks = require('node-mocks-http');

const healthController = require('../../src/routes/health/healthController');
const status = require('../mockData/status.json');

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe('healthController.getStatus', () => {
  it('should have a getStatus function', () => {
    expect(typeof healthController.getStatus).toBe('function');
  });

  it('should return 200 status code', () => {
    healthController.getStatus(req, res, next);

    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return json body in response', () => {
    healthController.getStatus(req, res, next);

    expect(res._getJSONData()).toStrictEqual({ data: [status] });
    expect(res._isEndCalled).toBeTruthy();
  });
});
