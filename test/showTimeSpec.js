define(['src/scripts/showTime'], function (ShowTime) {
    'use strict';

    //Empty incoming parameter

    describe('Test showTime module created without parameters ', function () {
        var showTime;

        beforeEach(function () {
            document.body.innerHTML = __html__.index;
            showTime = new ShowTime();
        });

        it('expects module showTime to be defined', function () {
            expect(showTime).toBeDefined();
        });

        it('expects variable hours to be defined', function () {
            expect(showTime.hours).toBeDefined();
        });

        it('expects variable minutes to be defined', function () {
            expect(showTime.minutes).toBeDefined();
        });

        it('expects variable currentTime to be defined', function () {
            expect(showTime.currentTime).toBeDefined();
        });

        it('expects variable hours to be 0', function () {
            expect(showTime.hours).toBe(0);
        });

        it('expects variable minutes to be 0', function () {
            expect(showTime.minutes).toBe(0);
        });

        it('expects variable currentTime length to be 0', function () {
            expect(showTime.currentTime.length).toBe(0);
        });

        it('expects addTimeItem method to be defined', function () {
            expect(showTime.addTimeItem).toBeDefined();
        });

        it('expects minutesToDisplay method to be defined', function () {
            expect(showTime.minutesToDisplay).toBeDefined();
        });

        it('expects hoursToDisplay method to be defined', function () {
            expect(showTime.hoursToDisplay).toBeDefined();
        });

        it('expects periodToDisplay method to be defined', function () {
            expect(showTime.periodToDisplay).toBeDefined();
        });

        it('expects timeToDisplay method to be defined', function () {
            expect(showTime.timeToDisplay).toBeDefined();
        });

        it('expects displayTime method to be defined', function () {
            expect(showTime.displayTime).toBeDefined();
        });

        it('expects eraseCurrentTime method to be defined', function () {
            expect(showTime.eraseCurrentTime).toBeDefined();
        });

    });

    //Created with parameters assosiated with some data

    describe('Test showTime module created with parameters ', function () {
        var showTime;

        beforeEach(function () {
            document.body.innerHTML = __html__.index;
            showTime = new ShowTime();
        });

        //tests for method addTimeItem

        it('expects method addTimeItem change variable currentTime', function () {
            showTime.addTimeItem('general');
            expect(showTime.currentTime.length).toBe(4);
        });

        //tests for method minutesToDisplay

        it('expects method minutesToDisplay accept 15 and change variable currentTime length to 8', function () {
            showTime.minutesToDisplay(15);
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method minutesToDisplay accept 20 and change variable currentTime length to 7', function () {
            showTime.minutesToDisplay(20);
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method minutesToDisplay accept 19 and change variable currentTime length to 8', function () {
            showTime.minutesToDisplay(19);
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method minutesToDisplay accept 18 and change variable currentTime length to 8', function () {
            showTime.minutesToDisplay(18);
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method minutesToDisplay accept 17 and change variable currentTime length to 9', function () {
            showTime.minutesToDisplay(17);
            expect(showTime.currentTime.length).toBe(9);
        });

        it('expects method minutesToDisplay accept 16 and change variable currentTime length to 7', function () {
            showTime.minutesToDisplay(16);
            expect(showTime.currentTime.length).toBe(7);
        });

        it('expects method minutesToDisplay accept 14 and change variable currentTime length to 8', function () {
            showTime.minutesToDisplay(14);
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method minutesToDisplay accept 13 and change variable currentTime length to 8', function () {
            showTime.minutesToDisplay(13);
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method minutesToDisplay accept 12 and change variable currentTime length to 6', function () {
            showTime.minutesToDisplay(12);
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method minutesToDisplay accept 11 and change variable currentTime length to 6', function () {
            showTime.minutesToDisplay(11);
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method minutesToDisplay accept 10 and change variable currentTime length to 3', function () {
            showTime.minutesToDisplay(10);
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method minutesToDisplay accept 9 and change variable currentTime length to 4', function () {
            showTime.minutesToDisplay(9);
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method minutesToDisplay accept 8 and change variable currentTime length to 5', function () {
            showTime.minutesToDisplay(8);
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method minutesToDisplay accept 7 and change variable currentTime length to 5', function () {
            showTime.minutesToDisplay(7);
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method minutesToDisplay accept 6 and change variable currentTime length to 3', function () {
            showTime.minutesToDisplay(6);
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method minutesToDisplay accept 5 and change variable currentTime length to 4', function () {
            showTime.minutesToDisplay(5);
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method minutesToDisplay accept 4 and change variable currentTime length to 4', function () {
            showTime.minutesToDisplay(4);
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method minutesToDisplay accept 3 and change variable currentTime length to 5', function () {
            showTime.minutesToDisplay(3);
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method minutesToDisplay accept 2 and change variable currentTime length to 3', function () {
            showTime.minutesToDisplay(2);
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method minutesToDisplay accept 1 and change variable currentTime length to 3', function () {
            showTime.minutesToDisplay(1);
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method minutesToDisplay accept 25 and change variable currentTime length to 10', function () {
            showTime.minutesToDisplay(25);
            expect(showTime.currentTime.length).toBe(10);
        });

        it('expects method minutesToDisplay accept 30 and change variable currentTime length to 4', function () {
            showTime.minutesToDisplay(30);
            expect(showTime.currentTime.length).toBe(4);
        });

        //tests for method hoursToDisplay

        it('expects method hoursToDisplay for 0 hours 0 minutes change variable currentTime length to 8', function () {
            showTime.hours = 0;
            showTime.minutes = 0;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(8);
        });

        it('expects method hoursToDisplay for 12 hours 0 minutes change variable currentTime length to 4', function () {
            showTime.hours = 12;
            showTime.minutes = 0;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method hoursToDisplay for 0 hours n minutes change variable currentTime length to 6', function () {
            showTime.hours = 0;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method hoursToDisplay for 1 hours n minutes change variable currentTime length to 3', function () {
            showTime.hours = 1;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method hoursToDisplay for 2 hours n minutes change variable currentTime length to 3', function () {
            showTime.hours = 2;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method hoursToDisplay for 3 hours n minutes change variable currentTime length to 5', function () {
            showTime.hours = 3;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method hoursToDisplay for 4 hours n minutes change variable currentTime length to 4', function () {
            showTime.hours = 4;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method hoursToDisplay for 5 hours n minutes change variable currentTime length to 4', function () {
            showTime.hours = 5;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method hoursToDisplay for 6 hours n minutes change variable currentTime length to 3', function () {
            showTime.hours = 6;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method hoursToDisplay for 7 hours n minutes change variable currentTime length to 5', function () {
            showTime.hours = 7;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method hoursToDisplay for 8 hours n minutes change variable currentTime length to 5', function () {
            showTime.hours = 8;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(5);
        });

        it('expects method hoursToDisplay for 9 hours n minutes change variable currentTime length to 4', function () {
            showTime.hours = 9;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(4);
        });

        it('expects method hoursToDisplay for 10 hours n minutes change variable currentTime length to 3', function () {
            showTime.hours = 10;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method hoursToDisplay for 11 hours n minutes change variable currentTime length to 6', function () {
            showTime.hours = 11;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method hoursToDisplay for 12 hours n minutes change variable currentTime length to 6', function () {
            showTime.hours = 12;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(6);
        });

        it('expects method hoursToDisplay for 13 hours n minutes change variable currentTime length to 3', function () {
            showTime.hours = 13;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(3);
        });

        it('expects method hoursToDisplay with passing parameter and 23 hours n minutes change variable currentTime length to 6', function () {
            showTime.hours = 23;
            showTime.minutes = 25;
            showTime.hoursToDisplay();
            expect(showTime.currentTime.length).toBe(6);
            expect(showTime.hours).toBe(23);
        });

        //tests for method periodToDisplay

        it('expects method periodToDisplay for 0 hours change variable currentTime length to 7', function () {
            showTime.periodToDisplay();
            expect(showTime.currentTime.length).toBe(7);
        });

        it('expects method periodToDisplay for 6 hours change variable currentTime length to 12', function () {
            showTime.hours = 6;
            showTime.periodToDisplay();
            expect(showTime.currentTime.length).toBe(12);
        });

        it('expects method periodToDisplay for 12 hours change variable currentTime length to 14', function () {
            showTime.hours = 12;
            showTime.periodToDisplay();
            expect(showTime.currentTime.length).toBe(14);
        });

        it('expects method periodToDisplay for 18 hours change variable currentTime length to 12', function () {
            showTime.hours = 18;
            showTime.periodToDisplay();
            expect(showTime.currentTime.length).toBe(12);
        });

        //tests for method timeToDisplay



    });
});
