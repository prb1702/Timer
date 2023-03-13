function reset() {
    document.getElementById('hr').value = 00;
    document.getElementById('min').value = 00;
    document.getElementById('sec').value = 00;
}

function timer(){
    var seconds=document.getElementById('sec');

    if(seconds.value>0)
    {
        seconds.value--;
    }
}

function timer1(){
    var minutes=document.getElementById('min');

    if(minutes.value>0)
    {
        minutes.value--;
    }
}

function timer2(){
    var hours=document.getElementById('hr');

    if(hours.value>0)
    {
        hours.value--;
    }
}

function start() {
        var hours=document.getElementById('hr').value;
        var minutes=document.getElementById('min').value;
        var seconds=document.getElementById('sec').value;


        setInterval(function(){

            timer();

        },1000)

        setInterval(function(){

            timer1();

        },60000)

        setInterval(function(){

            timer2();

        },3600000)

        console.log("hello");
}