requirejs.config({
    baseUrl: '/src/scripts',
    paths: {
        parseTime: '/src/scripts/parseTime',
        showTime: '/src/scripts/showTime'
    }
});

requirejs(['parseTime', 'showTime'], function (ParseTime, ShowTime) {
    'use strict';


    function start (trigger) {
        var date = new Date();
        var parseTime = new ParseTime(date);
        var showTime = new ShowTime(parseTime.hours, parseTime.minutes);
        showTime.eraseCurrentTime();
        showTime.displayTime();
        if(trigger){
            var seconds = date.getSeconds();
            var secondsToWait = (60-seconds)*1000;
            setTimeout(function(){ start() }, secondsToWait);
        }
        else{
            setTimeout(function(){ start() }, 60000);
        }
    };

    (function(){
        start(true);
    })();

});