/**
 * Created by LierreNarcissus on 11/23/16.
 */

goog.provide('js.greeter.greeting');

js.greeter.greeting.getGreeting = function(){

    var greetings = [
        'Hello',
        'Hi',
        'Howdy',
        'Hola'
    ];

    //console.log(greetings);
    //console.log(Math.random());

    return greetings[Math.floor(Math.random ()* greetings.length)];

};

