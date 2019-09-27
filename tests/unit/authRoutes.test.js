const httpMocks = require('node-mocks-http');

const tokenService = require('../../src/utils/tokenService');
const authRoutes = require('../../src/routes/auth/authRoutes');
const userCredentials = require('../mockData/userCredentials.json');
const token = require('../mockData/token.json');
const { HTTP400Error } = require('../../src/utils/httpErrors');

let req, res, next;
tokenService.generateToken = jest.fn();

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('authRoutes.createToken', () => {
  it('should have a createToken function', () => {
    expect(typeof authRoutes.createToken).toBe('function');
  });

  it('should call tokenService.generateToken with request body', () => {
    req.body = userCredentials;
    const { username } = userCredentials;
    const userId = username;

    authRoutes.createToken(req, res, next);

    expect(tokenService.generateToken).toBeCalledWith({ id: userId });
  });

  it('should return 201 status code', () => {
    req.body = userCredentials;

    authRoutes.createToken(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return json body in response', () => {
    req.body = userCredentials;

    tokenService.generateToken.mockReturnValue(token);

    authRoutes.createToken(req, res, next);

    expect(res._getJSONData()).toStrictEqual({ data: [{ token: token }] });
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return 400 status code if request body is empty', () => {
    const errorMessage = new HTTP400Error();

    authRoutes.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return 400 status code if username is missing', () => {
    req.body = { password: 'Test' };
    const errorMessage = new HTTP400Error();

    authRoutes.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
  });

  it('should return 400 status code if password is missing', () => {
    req.body = { username: 'Test' };
    const errorMessage = new HTTP400Error();

    authRoutes.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
  });
});
