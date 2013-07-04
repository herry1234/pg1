var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log("Ready");


    },
    duration_num: 1,
    vibrate: function() {
        console.log("I am buzzing for " + this.duration_num + " seconds");
        $("body > section").addClass("vibrate");
        if (app.pg && app.pg.vibrateMe) {
            console.log("calling vibrateMe");
            app.pg.vibrateMe(this.duration_num);
        }
        setTimeout(function() {
            $("body > section").removeClass("vibrate");
        }, this.duration_num * 1000);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

};
app.inject_pg = (function() {
    app.pg = {};

    app.pg.vibrateMe = function(duration_num) {
        try {
            console.log("do vibrate")
            navigator.notification.vibrate(duration_num * 1000);

        } catch (e) {
            alert(e);
        }

    }

})();
// do something

(function start() {


    //android mini-fill for css calc
    if ($("body > section > section").css("height") === "0px") {
        $(window).bind("resize", function() {
            $("body > section > section").css("height", "100%").css("height", "-=88px");
        });
        $("body > section > section").css("height", "100%").css("height", "-=88px");
    }
    $("input[type='range']").change(function() {
        app.pg.duration_num = $(this).val();
        console.log(app.pg.duration_num);
        $("output").text(app.pg.duration_num);
    });

    $("form").submit(function(se) {
        se.preventDefault();
        app.vibrate();
    })
})();

if (APP_PRODUCTION_TYPE === 1 || APP_PRODUCTION_TYPE === 3) {
    document.addEventListener("deviceready", function() {
        console.log("%cPhonegap device is now ready", "background-color: yellowgreen, color: whitesmoke");
        app.inject_gp();
    }, false);
    if (APP_PRODUCTION_TYPE === 1) {
        console.log("We are using PG in %cproduction", "color: hotpink");
    } else if (APP_PRODUCTION_TYPE === 3) {
        console.log("We are using PG in %cdevelopment", "color: hotpink");
    } else {
        alert("WTF more");
    }
} else {
    if (APP_PRODUCTION_TYPE === 2) {
        console.log("We are using HTML5 in %cproduction", "color: hotpink");
    } else if (APP_PRODUCTION_TYPE === 4) {
        console.log("We are using HTML5 in %cdevelopment", "color: hotpink");
    } else {
        alert("WTF");
    }
}