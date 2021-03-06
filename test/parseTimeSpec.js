define(['src/scripts/parseTime'], function(ParseTime){
    'use strict';

    //Empty incoming parameter

    describe('Test parseTime module created without parameter', function() {
        var parseTime;

        beforeEach(function(){
            parseTime = new ParseTime();
        });

        it('expects variable hours to be defined', function() {
            expect(parseTime.hours).toBeDefined();
        });

        it('expects variable minutes to be defined', function() {
            expect(parseTime.minutes).toBeDefined();
        });

        it('expects variable hours to be 0', function() {
            expect(parseTime.hours).toBe(0);
        });

        it('expects variable minutes to be 0', function() {
            expect(parseTime.minutes).toBe(0);
        });

    });

    //Pass parameter associated with some date

    describe('Test parseTime module created with parameter', function() {

        var parseTime;

        beforeEach(function(){
            var date = new Date("October 13, 2014 11:13:00");
            parseTime = new ParseTime(date);
        });

        it('expects variable hours to be defined', function() {
            expect(parseTime.hours).toBeDefined();
        });

        it('expects variable minutes to be defined', function() {
            expect(parseTime.minutes).toBeDefined();
        });

        it('expects variable hours to be 11', function() {
            expect(parseTime.hours).toBe(11);
        });

        it('expects variable minutes to be 13', function() {
            expect(parseTime.minutes).toBe(13);
        });

        // test method findHours

        it('expects method findHours take "October 13, 2014 21:13:00" and return 21', function() {
            var date = new Date("October 13, 2014 21:13:00");
            expect(parseTime.findHours(date)).toBe(21);
        });

        // test method findMinutes

        it('expects method findMinutes take "October 13, 2014 21:13:00" and return 13', function() {
            var date = new Date("October 13, 2014 21:13:00");
            expect(parseTime.findMinutes(date)).toBe(13);
        });

    });

});
