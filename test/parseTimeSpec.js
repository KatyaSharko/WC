define(['src/scripts/parseTime'], function(ParseTime){
    'use strict';

    //Empty incoming parameter

    describe('Test module for being defined with not passing parameter', function() {
        var parseTime;

        beforeEach(function(){
            parseTime = new ParseTime();
        });

        it('expects module to be defined', function() {
            expect(parseTime).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.findHours).toBeDefined();
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.findMinutes).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.hours).toBeDefined();
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.minutes).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.hours).toBe(0);
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.minutes).toBe(0);
        });
    });

    //Pass parameter assosiated with some date

    describe('Test module for being defined with not passing parameter', function() {

        var parseTime;

        beforeEach(function(){
            var date = new Date("October 13, 2014 11:13:00");
            parseTime = new ParseTime(date);
        });

        it('expects module to be defined', function() {
            expect(parseTime).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.findHours).toBeDefined();
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.findMinutes).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.hours).toBeDefined();
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.minutes).toBeDefined();
        });
        it('expects findHours method to be defined', function() {
            expect(parseTime.hours).toBe(11);
        });
        it('expects findMinutes method to be defined', function() {
            expect(parseTime.minutes).toBe(13);
        });
    });

});
