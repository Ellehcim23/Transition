const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const db = require('../models');


before(function (done) {
    db.sequelize.sync({ force: true }).then(function () {
        done();
    });
});

describe('New-York Controller', function () {
    describe('GET /los-angeles/index', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/new-york/').expect(200, done);
        });
    });
    describe('GET /new-york/salary', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/new-york/salary').expect(200, done);
        });
    });
    describe('GET /new-york/score', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/new-york/score').expect(200, done);
        });
    });
    describe('GET /new-york/gallery', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/new-york/gallery').expect(200, done);
        });
    });
});