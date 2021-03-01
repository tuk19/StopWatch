function TimeCount(){
    let ms = $("#m_second").text();
    let sec = $("#second").text();
    let min = $("#minute").text();
    let hour = $("#hour").text();   
    ms++;
    $("#m_second").text(ms);
    if ($("#m_second").text()==10){
        sec++;
        $("#m_second").text(0);
        $("#second").text(sec);
    }
    if ($("#second").text()==60){
        min++;
        $("#second").text(0);
        $("#minute").text(min);
    }
    if ($("#second").text()==60){
        min++;
        $("#second").text(0);
        $("#minute").text(min);
    }
    if ($("#minute").text()==60){
        hour++;
        $("#minute").text(0);
        $("#hour").text(hour);
    }
}

let start = 0;
let time_count = null;

$(document).ready(function(){
    $("#start").click(function(){
        start += 1
        if (start==1){ 
            time_count = setInterval(TimeCount, 100);
        };
    });
    $("#stop").click(function(){
        clearInterval(time_count);
        start = 0;
    });
    $("#reset").click(function(){
        clearInterval(time_count);
        start=0;
        $("#hour").text(0);
        $("#minute").text(0);
        $("#second").text(0);
        $("#m_second").text(0);
    });
});


