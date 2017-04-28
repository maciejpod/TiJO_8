'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should return string with reversed numbers', function () {
        expect(app.reverseNumber(1234)).to.eql(4321);
    });

    it('should return false when nan is given', function () {
        expect(app.reverseNumber('ala')).to.eql(false);
    })
});

describe('returnOnlyLetter', function () {
    it('should return string which conatins only letters', function () {
        expect(app.returnOnlyLetter('12345ap')).to.eql('ap');
    });

    it('should return false when non string data given', function () {
        expect(app.returnOnlyLetter(123)).to.eql(false);
    })
});

describe('isEmail', function () {
    it('should return false for non email string', function () {
        expect(app.isEmail("alamakota")).to.eql(false);
    })

    it('should return true when correct email given', function () {
        expect(app.isEmail("ala@ma.kota")).to.eql(true);
    })
});

