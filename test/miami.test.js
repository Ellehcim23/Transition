const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const db = require('../models');


before(function (done) {
    db.sequelize.sync({ force: true }).then(function () {
        done();
    });
});

describe('Miami Controller', function () {
    describe('GET /miami/index', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/miami/').expect(200, done);
        });
    });
    describe('GET /miami/salary', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/miami/salary').expect(200, done);
        });
    });
    describe('GET /miami/score', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/miami/score').expect(200, done);
        });
    });
    describe('GET /miami/gallery', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/miami/gallery').expect(200, done);
        });
    });
});