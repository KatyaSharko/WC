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
define(function(){
    'use strict';

    function ShowTime(hours, minutes){
        this.hours = hours;
        this.minutes = minutes;
        this.currentTime = [];
    }

    ShowTime.prototype = {
        constructor: ShowTime,
        addTimeItem: function(selector){
            var item = document.getElementsByClassName(selector);
            for(var i = 0; i < item.length; i++) {
                this.currentTime.push(item[i]);
            }
        },

        minutesToDisplay: function(minutes){
            if(minutes < 30){
                if(minutes <= 20){
                    if(minutes === 15) {
                        this.addTimeItem('a');
                        var selector =  '' + minutes + 'min';
                        this.addTimeItem(selector);
                    }
                    else{
                        var selector =  '' + minutes + 'min';
                        this.addTimeItem(selector);
                    }
                }
                else{
                    var remainder = minutes - 20;
                    var selector =  '' + 20 + 'min';
                    this.addTimeItem(selector);
                    var selector =  '' + remainder + 'min';
                    this.addTimeItem(selector);
                }
            }
            else {
                this.addTimeItem('half');
            }
        },

        hoursToDisplay: function(trigger){
            if(trigger)
                this.hours++;

            if((this.hours === 0) && (this.minutes === 0)){
                var selector = 'midnight';
                this.addTimeItem(selector);
            }
            else if((this.hours === 12) && (this.minutes === 0)){
                console.log('noon');
                var selector = 'noon';
                this.addTimeItem(selector);
            }
            else if((this.hours <= 12) && (this.hours >= 0)){
                var selector = '' + this.hours + 'hr';
                this.addTimeItem(selector);
            }
            else if((this.hours > 12) && (this.hours < 24)){
                var hour = this.hours - 12;
                var selector = '' + hour + 'hr';
                this.addTimeItem(selector);
            }
            else {
                var hour = this.hours - 24;
                var selector = '' + hour + 'hr';
                this.addTimeItem(selector);
            }
            if(trigger)
                this.hours--;
        },

        periodToDisplay: function(){
            if((this.hours >= 0) && (this.hours < 6)){
                this.addTimeItem('at');
                this.addTimeItem('night');
            }
            if((this.hours >=6 ) && (this.hours < 12)){
                this.addTimeItem('in');
                this.addTimeItem('the');
                this.addTimeItem('morning');
            }
            if((this.hours >=12 ) && (this.hours < 18)){
                this.addTimeItem('in');
                this.addTimeItem('the');
                this.addTimeItem('afternoon');
            }
            if((this.hours >=18 ) && (this.hours < 24)){
                this.addTimeItem('in');
                this.addTimeItem('the');
                this.addTimeItem('evening');
            }
        },

        timeToDisplay: function() {
            this.addTimeItem('general');
            if(this.minutes !== 0){
                if(this.minutes <= 30){
                    this.minutesToDisplay(this.minutes);
                    this.addTimeItem('past');
                    this.hoursToDisplay();
                }
                else{
                    this.minutesToDisplay(30-(this.minutes-30));
                    this.addTimeItem('to');
                    this.hoursToDisplay(true);
                }
            }
            else{
                this.hoursToDisplay();
                if((this.hours !== 0) && (this.hours !== 12))
                    this.addTimeItem('oclock');
            }
            if(((this.hours === 0) && (this.minutes === 0)) || ((this.hours === 12) && (this.minutes === 0))){}
            else{
                this.periodToDisplay();
            }

        },


        displayTime: function(){
            this.timeToDisplay();
            for(var i = 0; i < this.currentTime.length; i++){
                this.currentTime[i].classList.add('light');
            }
        },

        eraseCurrentTime: function(){
            var timeToErase = document.getElementsByClassName('light');
            for(var i = 0; i < timeToErase.length; i++){
                timeToErase[0].classList.remove('light');
            }
        }
    };
    return ShowTime;

});