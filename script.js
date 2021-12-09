$(document).ready(onReady);


function onReady(){
 	console.log('on ready');
    //$('.title').text('Ken is learning Jquery');  // changing the h1 text in header using class
   
    $('#top').css({
        color: 'green',
        'font-size': '28px'
    })

    $('header').first().find('h1').text('Ken');  // select header, find first element of h1 and change text




};