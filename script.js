$(document).ready(onReady);


function onReady(){
 	console.log('on ready');
    $('.title').text('Ken is learning Jquery');  // changing the h1 text in header using class
   
    $('#top').first('h1').css({
        color: 'green',
        'font-size': '28px'
    })






};