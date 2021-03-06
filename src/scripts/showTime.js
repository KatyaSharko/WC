define(function () {
    'use strict';

    /**
     * @constructs  ShowTime
     * @param {number} hours - Number of hours.
     * @param {number} minutes - Number of minutes.
     */
    function ShowTime(hours, minutes) {
        this.hours = (hours) ? hours : 0;
        this.minutes = (minutes) ? minutes : 0;
    }

    ShowTime.prototype = {

        constructor: ShowTime,

        /**
         * It finds selectors to display minutes.
         * @returns {Array} Minute selectors.
         */
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

        /**
         * It finds selectors to display hours.
         * @returns {Array} Hour selectors.
         */
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

        /**
         * It finds selectors to display period of day.
         * @returns {Array} Period selectors.
         */
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

        /**
         * It gathers all selectors to display time.
         * @returns {Array} Time selectors.
         */
        timeToDisplay: function () {
            var selectors = [];

            selectors.push('general');
            if (this.minutes !== 0) {
                selectors = selectors.concat(this.minutesToDisplay());
                if (this.minutes <= 30)
                    selectors.push('past');
                else
                    selectors.push('to');
            }
            selectors = selectors.concat(this.hoursToDisplay());

            if ((this.minutes === 0) && (this.hours !== 0) && (this.hours !== 12))
                selectors.push('oclock');
            if (ShowTime.isNoon(this.hours, this.minutes) || ShowTime.isMidnight(this.hours, this.minutes)){}
            else
                selectors = selectors.concat(this.periodToDisplay());

            return selectors;
        },

        /**
         * It displays time.
         */
        displayTime: function () {
            var timeSelectors = this.timeToDisplay();
            for (var i = 0; i < timeSelectors.length; i++) {
                var items = document.getElementsByClassName(timeSelectors[i]);
                for (var j = 0; j < items.length; j++) {
                    items[j].classList.add('light');
                }
            }
        },

        /**
         * It erases time.
         */
        eraseCurrentTime: function () {
            var timeToErase = document.getElementsByClassName('light');
            var counter = timeToErase.length;
            for (var i = 0; i < counter; i++)
                timeToErase[0].classList.remove('light');
        }
    };

    /**
     * It checks if it is night.
     * @param {number} hours - Number of hours.
     * @returns {boolean}
     */
    ShowTime.isNight = function (hours) {
        return (hours >= 0) && (hours < 6);
    };

    /**
     * It checks if it is morning.
     * @param {number} hours - Number of hours.
     * @returns {boolean}
     */
    ShowTime.isMorning = function (hours) {
        return (hours >= 6 ) && (hours < 12);
    };

    /**
     * It checks if it is afternoon.
     * @param {number} hours - Number of hours.
     * @returns {boolean}
     */
    ShowTime.isAfternoon = function (hours) {
        return (hours >= 12 ) && (hours < 18);
    };

    /**
     * It checks if it is evening.
     * @param {number} hours - Number of hours.
     * @returns {boolean}
     */
    ShowTime.isEvening = function (hours) {
        return (hours >= 18 ) && (hours < 24);
    };

    /**
     * It checks if it is noon.
     * @param {number} hours - Number of hours.
     * @param {number} minutes - Number of minutes.
     * @returns {boolean}
     */
    ShowTime.isNoon = function (hours, minutes) {
        return (hours === 12) && (minutes === 0);
    };

    /**
     * It checks if it is midnight.
     * @param {number} hours - Number of hours.
     * @param {number} minutes - Number of minutes.
     * @returns {boolean}
     */
    ShowTime.isMidnight = function (hours, minutes) {
        return (hours === 0) && (minutes === 0);
    };

    return ShowTime;

});
