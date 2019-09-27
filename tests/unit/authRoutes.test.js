const httpMocks = require('node-mocks-http');

const tokenService = require('../../src/utils/tokenService');
const authController = require('../../src/routes/auth/authController');
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

describe('authController.createToken', () => {
  it('should have a createToken function', () => {
    expect(typeof authController.createToken).toBe('function');
  });

  it('should call tokenService.generateToken with a request body', () => {
    req.body = userCredentials;
    const { username } = userCredentials;
    const userId = username;

    authController.createToken(req, res, next);

    expect(tokenService.generateToken).toBeCalledWith({ id: userId });
  });

  it('should return 201 status code', () => {
    req.body = userCredentials;

    authController.createToken(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return json body in response', () => {
    req.body = userCredentials;

    tokenService.generateToken.mockReturnValue(token);

    authController.createToken(req, res, next);

    expect(res._getJSONData()).toStrictEqual({ data: [{ token }] });
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return 400 status code if a request body is empty', () => {
    const errorMessage = new HTTP400Error();

    authController.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
    expect(res._isEndCalled).toBeTruthy();
  });

  it('should return 400 status code if a username is missing', () => {
    req.body = { password: 'Test' };
    const errorMessage = new HTTP400Error();

    authController.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
  });

  it('should return 400 status code if a password is missing', () => {
    req.body = { username: 'Test' };
    const errorMessage = new HTTP400Error();

    authController.createToken(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
  });
});
