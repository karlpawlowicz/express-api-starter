const request = require('supertest');

const router = require('../../src/router');
const userCredentials = require('../mockData/userCredentials.json');
const tokenService = require('../../src/utils/tokenService');
const http400Error = require('../mockData/http400Error.json');

const endpoint = '/api/auth/';

describe(endpoint, () => {
  test(`POST ${endpoint}`, async () => {
    const response = await request(router)
      .post(endpoint)
      .send(userCredentials);

    const { username } = userCredentials;
    const userId = username;
    const token = tokenService.generateToken({ id: userId });

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data[0].token).toBeDefined();
    expect(response.body.data[0].token).toStrictEqual(token);
  });

  it(`should return 400 status code if request body is empty on POST ${endpoint}`, async () => {
    const response = await request(router)
      .post(endpoint)
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(http400Error);
  });

  it(`should return 400 status code if username is missing on POST ${endpoint}`, async () => {
    const response = await request(router)
      .post(endpoint)
      .send({ password: 'Test' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(http400Error);
  });

  it(`should return 400 status code if password is missing on POST ${endpoint}`, async () => {
    const response = await request(router)
      .post(endpoint)
      .send({ username: 'Test' });

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(http400Error);
  });
});
