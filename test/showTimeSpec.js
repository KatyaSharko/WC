define(['src/scripts/showTime'], function(ShowTime){
    'use strict';

    describe('Test showTime module', function(){

        beforeEach(function(){
            document.body.innerHTML = __html__['testTable.html'];
        });

        it('expects module to be defined', function() {

            expect(document.getElementsByClassName('item')).toBeDefined();
        });

    })



});
