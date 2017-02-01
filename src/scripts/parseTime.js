define(function(){
    'use strict';

    function ParseTime(time){
        this.hours = (time) ? this.findHours(time) : 0;
        this.minutes = (time) ? this.findMinutes(time) : 0;
    }

    ParseTime.prototype = {

        constructor :ParseTime,

        findHours: function(time){
            return time.getHours();
        },

        findMinutes: function(time){
            return time.getMinutes();
        }
    };

    return ParseTime;

});
