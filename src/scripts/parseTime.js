define(function(){
    'use strict';

    function ParseTime(time){
        this.hours = this.findHours(time);
        this.minutes = this.findMinutes(time);
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