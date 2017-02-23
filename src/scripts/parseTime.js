
define(function(){
    'use strict';

    /**
     * @constructs  ParseTime
     * @param {date} time - Current date.
     */
    function ParseTime(time){
        this.hours = (time) ? this.findHours(time) : 0;
        this.minutes = (time) ? this.findMinutes(time) : 0;
    }

    ParseTime.prototype = {

        constructor :ParseTime,

        /**
         * It finds hours value.
         * @param {date} time - Current date.
         * @returns {number} Hours.
         */
        findHours: function(time){
            return time.getHours();
        },

        /**
         * It finds minutes value.
         * @param {date} time - Current date.
         * @returns {number} Minutes.
         */
        findMinutes: function(time){
            return time.getMinutes();
        }
    };


    return ParseTime;

});

