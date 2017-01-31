requirejs.config({
    baseUrl: '/src/scripts',
    paths: {
        parseTime: '/src/scripts/parseTime',
        showTime: '/src/scripts/showTime'
    }
});

requirejs(['parseTime', 'showTime'], function (ParseTime, ShowTime) {
    'use strict';

    function displayTime (trigger) {
        var date = new Date();
        var parseTime = new ParseTime(date);
        var showTime = new ShowTime(parseTime.hours, parseTime.minutes);
        showTime.eraseCurrentTime();
        showTime.displayTime();
        if(trigger){
            var seconds = date.getSeconds();
            var secondsToWait = (60-seconds)*1000;
            setTimeout(function(){ displayTime() }, secondsToWait);
        }
        else{
            setTimeout(function(){ displayTime() }, 60000);
        }
    };

    (function(){
        displayTime(true);
    })();

});
