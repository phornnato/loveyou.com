document.addEventListener("DOMContentLoaded", function(){
    // Define func1 in the global scope
    window.func1 = function() {
        document.getElementById("header").style.color = "green";
    };

    // Define func2 in the global scope
    window.func2 = function() {
        var change = document.getElementById("demo");
        if (change) {
            change.innerHTML = "<p>i love you</p><img id='pic' src='hello.gif'/>";
        }
    };
    window.func3 = function() {
        var change = document.getElementById("demo");
        if (change) {
            change.innerHTML = "<p>i hate you</p><img id='pic' src='hello1.gif'/>";
        }
    };
    window.func4 = function() {
        var change = document.getElementById("demo");
        if (change) {
            change.innerHTML = "<p>will you married me, hik hik </p><img id='pic' src='https://media.tenor.com/y_nhpANxpPYAAAAi/kiss-cute.gif'/>";
        }
    };
});
