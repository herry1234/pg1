console.log("hello");

var PGAPP = {};

function deviceReady() {
    console.log("Ready");
    PGAPP.vibrateMe = function(){
        try{
            console.log("do vibrate")
            navigator.notification.vibrate(duration_num*1000);
            
        }catch(e){
            alert(e);
        }
        
    }
};
var duration_num = 1;
document.addEventListener("deviceready", deviceReady, false);

function vibrate(){
    console.log("I am buzzing for " + duration_num + " seconds");
    $("body > section").addClass("vibrate");
    if(PGAPP && PGAPP.vibrateMe){
        console.log("calling vibrateMe");
        PGAPP.vibrateMe();
    }
    setTimeout(function() {
        $("body > section").removeClass("vibrate");
    }, duration_num*1000);

}

$("input[type='range']").change(function(){
    duration_num = $(this).val();
    console.log(duration_num);
    $("output").text(duration_num);
});

$("form").submit(function(se){
    se.preventDefault();
    vibrate();
})