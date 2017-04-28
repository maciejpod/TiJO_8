'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should return string with reversed numbers', function () {
        expect(app.reverseNumber(1234)).to.eql(4321);
    });
});

describe('returnOnlyLetter', function () {
    it('should return string which conatins only letters', function () {
        expect(app.returnOnlyLetter('12345ap')).to.eql('ap');
    });
});

describe('isEmail', function () {
    it('should return false for non email string', function () {
        expect(app.isEmail("alamakota")).to.eql(false);
    })
});

