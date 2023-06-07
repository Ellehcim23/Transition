const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const db = require('../models');


before(function (done) {
    db.sequelize.sync({ force: true }).then(function () {
        done();
    });
});

describe('Los-angeles Controller', function () {
    describe('GET /los-angeles/index', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/los-angeles/').expect(200, done);
        });
    });
    describe('GET /los-angeles/salary', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/los-angeles/salary').expect(200, done);
        });
    });
    describe('GET /los-angeles/score', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/los-angeles/score').expect(200, done);
        });
    });
    describe('GET /los-angeles/gallery', function () {
        it('should return a 200 response', function (done) {
            request(app).get('/los-angeles/gallery').expect(200, done);
        });
    });
});