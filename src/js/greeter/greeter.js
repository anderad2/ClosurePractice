/**
 * Created by LierreNarcissus on 11/23/16.
 */
goog.provide('js.greeter');

goog.require('goog.dom');
goog.require('js.greeter.greeting');


js.greeter.greet = function(id){
    var element = goog.dom.getElement(id);

    if(element){
        //element.innerHTML = 'Hello from Closure!';
        element.innerHTML = js.greeter.greeting.getGreeting();
        console.log('greeting executed');
    }
}