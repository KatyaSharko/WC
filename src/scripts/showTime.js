define(function () {
    'use strict';

    function ShowTime(hours, minutes) {
        this.hours = (hours) ? hours : 0;
        this.minutes = (minutes) ? minutes : 0;
    }

    ShowTime.prototype = {
        constructor: ShowTime,

        addTimeItems: function (allSelectors, selectors) {
            for (var i = 0; i < selectors.length; i++) {
                allSelectors.push(selectors[i]);
            }
            return allSelectors;
        },

        minutesToDisplay: function () {
            var selectors = [];
            var minutes = this.minutes;
            if (minutes > 30)
                minutes = 60 - minutes;
            if (minutes < 30) {
                if (minutes <= 20) {
                    if (minutes === 15) {
                        selectors.push('a');
                        selectors.push('' + minutes + 'min');
                    }
                    else
                        selectors.push('' + minutes + 'min');
                }
                else {
                    selectors.push('' + 20 + 'min');
                    selectors.push('' + minutes - 20 + 'min');
                }
            }
            else {
                selectors.push('half');
            }
            return selectors;
        },

        hoursToDisplay: function () {
            var selectors = [];
            var hours = this.hours;
            if (this.minutes > 30)
                hours++;
            if (ShowTime.isMidnight(hours, this.minutes)) {
                selectors.push('midnight');
            }
            else if (ShowTime.isNoon(hours, this.minutes)) {
                selectors.push('noon');
            }
            else if ((hours <= 12) && (hours >= 0))
                selectors.push('' + hours + 'hr');
            else if ((hours > 12) && (hours < 24))
                selectors.push('' + hours-12 + 'hr');
            else
                selectors.push('' + hours-24 + 'hr');
            return selectors;
        },

        periodToDisplay: function () {
            var selectors = [];
            if (ShowTime.isNight(this.hours)) {
                selectors.push('at');
                selectors.push('night');
            }
            else {
                selectors.push('in');
                selectors.push('the');
                if (ShowTime.isMorning(this.hours)) {
                    selectors.push('morning');
                }
                if (ShowTime.isAfternoon(this.hours)) {
                    selectors.push('afternoon');
                }
                if (ShowTime.isEvening(this.hours)) {
                    selectors.push('evening');
                }
            }
            return selectors;
        },

        timeToDisplay: function () {
            var selectors = [];
            selectors.push('general');
            if (this.minutes !== 0) {
                selectors = this.addTimeItems(selectors, this.minutesToDisplay());
                if (this.minutes <= 30)
                    selectors.push('past');
                else
                    selectors.push('to');
            }
            selectors = this.addTimeItems(selectors, this.hoursToDisplay());
            if ((this.minutes === 0) && (this.hours !== 0) && (this.hours !== 12))
                selectors.push('oclock');
            if (ShowTime.isNoon(this.hours, this.minutes) || ShowTime.isMidnight(this.hours, this.minutes)){}
            else
                selectors = this.addTimeItems(selectors, this.periodToDisplay());
            return selectors;
        },

        displayTime: function () {
            var timeSelectors = this.timeToDisplay();
            for (var i = 0; i < timeSelectors.length; i++) {
                var items = document.getElementsByClassName(timeSelectors[i]);
                for (var j = 0; j < items.length; j++) {
                    items[j].classList.add('light');
                }
            }
        },

        eraseCurrentTime: function () {
            var timeToErase = document.getElementsByClassName('light');
            var counter = timeToErase.length;
            for (var i = 0; i < counter; i++)
                timeToErase[0].classList.remove('light');
        }
    };

    ShowTime.isNight = function (hours) {
        return (hours >= 0) && (hours < 6);
    };

    ShowTime.isMorning = function (hours) {
        return (hours >= 6 ) && (hours < 12);
    };

    ShowTime.isAfternoon = function (hours) {
        return (hours >= 12 ) && (hours < 18);
    };

    ShowTime.isEvening = function (hours) {
        return (hours >= 18 ) && (hours < 24);
    };

    ShowTime.isNoon = function (hours, minutes) {
        return (hours === 12) && (minutes === 0);
    };

    ShowTime.isMidnight = function (hours, minutes) {
        return (hours === 0) && (minutes === 0);
    };

    return ShowTime;

});
