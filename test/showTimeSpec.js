define(['src/scripts/showTime'], function (ShowTime) {
    'use strict';

    //Created without parameter

    describe('Test showTime module created without parameters ', function () {
        var showTime;

        beforeEach(function () {
            document.body.innerHTML = __html__.index;
            showTime = new ShowTime();
        });

        it('expects variable hours to be defined', function () {
            expect(showTime.hours).toBeDefined();
        });

        it('expects variable minutes to be defined', function () {
            expect(showTime.minutes).toBeDefined();
        });

        it('expects variable hours to be 0', function () {
            expect(showTime.hours).toBe(0);
        });

        it('expects variable minutes to be 0', function () {
            expect(showTime.minutes).toBe(0);
        });

    });

    //Created with parameters associated with some data

    describe('Test showTime module created with parameters ', function () {
        var showTime;

        beforeEach(function () {
            document.body.innerHTML = __html__.index;
            showTime = new ShowTime();
        });

        //test method addTimeItems

        it('expects method addTimeItems concat two arrays', function () {
            var arr1 = ['general'];
            var arr2 = ['to'];
            var result = showTime.addTimeItems(arr1, arr2);
            expect(result.length).toBe(2);
            expect(result).toContain('general');
            expect(result).toContain('to');
        });

        //tests for method minutesToDisplay

        it('expects method minutesToDisplay for 15 minutes return array with two elements "a" and "15min"', function () {
            showTime.minutes = 15;
            var result = showTime.minutesToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('a');
            expect(result).toContain('15min');
        });

        it('expects method minutesToDisplay for 8 minutes return array with one element "8min"', function () {
            showTime.minutes = 8;
            var result = showTime.minutesToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('8min');
        });

        it('expects method minutesToDisplay for 25 minutes return array with two elements "20min" and "5min"', function () {
            showTime.minutes = 25;
            var result = showTime.minutesToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('20min');
            expect(result).toContain('5min');
        });

        it('expects method minutesToDisplay for 30 minutes return array with one element "half"', function () {
            showTime.minutes = 30;
            var result = showTime.minutesToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('half');
        });

        it('expects method minutesToDisplay for 38 minutes return array with two elements "20min" and "2min"', function () {
            showTime.minutes = 38;
            var result = showTime.minutesToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('20min');
            expect(result).toContain('2min');
        });

        //test method hoursToDisplay

        it('expects method hoursToDisplay for 0 hours 0 minutes return array with one element "midnight"', function () {
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('midnight');
        });

        it('expects method hoursToDisplay for 12 hours 0 minutes return array with one element "noon"', function () {
            showTime.hours = 12;
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('noon');
        });

        it('expects method hoursToDisplay for 5 hours return array with one element "5hr"', function () {
            showTime.hours = 5;
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('5hr');
        });

        it('expects method hoursToDisplay for 15 hours return array with one element "3hr"', function () {
            showTime.hours = 15;
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('3hr');
        });

        it('expects method hoursToDisplay for 23 hours 45 minutes return array with one element "0hr"', function () {
            showTime.hours = 23;
            showTime.minutes = 45;
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('0hr');
        });

        it('expects method hoursToDisplay for 5 hours 45 minutes return array with one element "6hr"', function () {
            showTime.hours = 5;
            showTime.minutes = 45;
            var result = showTime.hoursToDisplay();
            expect(result.length).toBe(1);
            expect(result).toContain('6hr');
        });

        //test method periodToDisplay

        it('expects method  periodToDisplay for 5 hours return array with two elements "at" and "night"', function () {
            showTime.hours = 5;
            var result = showTime. periodToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('at');
            expect(result).toContain('night');
        });

        it('expects method  periodToDisplay for 7 hours return array with three elements "in", "the" and "morning"', function () {
            showTime.hours = 7;
            var result = showTime. periodToDisplay();
            expect(result.length).toBe(3);
            expect(result).toContain('in');
            expect(result).toContain('the');
            expect(result).toContain('morning');
        });

        it('expects method  periodToDisplay for 13 hours return array with three elements "in", "the" and "afternoon"', function () {
            showTime.hours = 13;
            var result = showTime. periodToDisplay();
            expect(result.length).toBe(3);
            expect(result).toContain('in');
            expect(result).toContain('the');
            expect(result).toContain('afternoon');
        });

        it('expects method  periodToDisplay for 21 hours return array with three elements "in", "the" and "evening"', function () {
            showTime.hours = 21;
            var result = showTime. periodToDisplay();
            expect(result.length).toBe(3);
            expect(result).toContain('in');
            expect(result).toContain('the');
            expect(result).toContain('evening');
        });

        //test method timeToDisplay

        it('expects method timeToDisplay for 10 hours 20 minutes return array with 7 elements and contain "general" and "past" ', function () {
            showTime.hours = 10;
            showTime.minutes = 20;
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(7);
            expect(result).toContain('general');
            expect(result).toContain('past');
        });

        it('expects method timeToDisplay for 10 hours 40 minutes return array with 7 elements and contain "general" and "to" ', function () {
            showTime.hours = 10;
            showTime.minutes = 40;
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(7);
            expect(result).toContain('general');
            expect(result).toContain('to');
        });

        it('expects method timeToDisplay for 10 hours 0 minutes return array with 6 elements and contain "oclock" ', function () {
            showTime.hours = 10;
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(6);
            expect(result).toContain('oclock');
        });

        it('expects method timeToDisplay for 0 hours 0 minutes return array with 2 elements "general" and "midnight" ', function () {
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('general');
            expect(result).toContain('midnight');
        });

        it('expects method timeToDisplay for 12 hours 0 minutes return array with 2 elements "general" and "noon" ', function () {
            showTime.hours = 12;
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(2);
            expect(result).toContain('general');
            expect(result).toContain('noon');
        });

        it('expects method timeToDisplay for 12 hours 20 minutes return array with 7 elements ', function () {
            showTime.hours = 12;
            showTime.minutes = 20;
            var result = showTime.timeToDisplay();
            expect(result.length).toBe(7);
        });

        //test method displayTime

        it('expects method displayTime for 12 hours 0 minutes add class "light" to all elements which timeToDisplay returns', function () {
            var time = ['I', 'T', 'I', 'S', 'N', 'O', 'O', 'N'];

            showTime.hours = 12;
            showTime.displayTime();

            var items = document.getElementsByClassName('light');
            var itemsValues = [];
            for (var i = 0; i < items.length; i++)
                itemsValues.push(items[i].innerHTML);

            expect(time.length).toBe(items.length);
            for (i = 0; i < itemsValues.length; i++)
                expect(time).toContain(itemsValues[i]);
        });

        //test method eraseCurrentTime

        it('expects method eraseCurrentTime erase class "light" from all elements in variable currentTime', function () {
            showTime.hours = 12;
            showTime.displayTime();
            showTime.eraseCurrentTime();
            var items = document.getElementsByClassName('light');
            expect(items.length).toBe(0);
        });

        //test method ShowTime.isNight

        it('expects method ShowTime.isNight for 5 hours return true ', function () {
           expect(ShowTime.isNight(5)).toBe(true);
        });

        it('expects method ShowTime.isNight for 16 hours return false ', function () {
            expect(ShowTime.isNight(16)).toBe(false);
        });

        //test method ShowTime.isMorning

        it('expects method ShowTime.isMorning for 7 hours return true ', function () {
            expect(ShowTime.isMorning(7)).toBe(true);
        });

        it('expects method ShowTime.isMorning for 16 hours return false ', function () {
            expect(ShowTime.isMorning(16)).toBe(false);
        });

        //test method ShowTime.isAfternoon

        it('expects method ShowTime.isAfternoon for 16 hours return true ', function () {
            expect(ShowTime.isAfternoon(16)).toBe(true);
        });

        it('expects method ShowTime.isAfternoon for 7 hours return false ', function () {
            expect(ShowTime.isAfternoon(7)).toBe(false);
        });

        //test method ShowTime.isEvening

        it('expects method ShowTime.isEvening for 21 hours return true ', function () {
            expect(ShowTime.isEvening(21)).toBe(true);
        });

        it('expects method ShowTime.isEvening for 7 hours return false ', function () {
            expect(ShowTime.isEvening(7)).toBe(false);
        });

        //test method ShowTime.isNoon

        it('expects method ShowTime.isNoon for 12 hours 0 minutes return true ', function () {
            expect(ShowTime.isNoon(12,0)).toBe(true);
        });

        it('expects method ShowTime.isNoon for 7 hours 20 minutes return false ', function () {
            expect(ShowTime.isNoon(7,20)).toBe(false);
        });

        //test method ShowTime.isMidnight

        it('expects method ShowTime.isMidnight for 0 hours 0 minutes return true ', function () {
            expect(ShowTime.isMidnight(0,0)).toBe(true);
        });

        it('expects method ShowTime.isMidnight for 7 hours 20 minutes return false ', function () {
            expect(ShowTime.isMidnight(7,20)).toBe(false);
        });

    });

});
