function rotate() {
    if ($("img").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
        $("img").css({
            "transform": "rotateZ(" + Math.floor(Math.random()*360 + 720 * 2 + 1) + "deg)",
            "transition": "transform 2s ease"
        });
    }

    $("#reset").html("Reset");
}

function reset(){
    $("img").css({
        "transform": "rotateZ(0deg)",
        "transition": "transform 0s ease"
    });
    $("#reset").html("Ready");
}

function checkAndSet() {
    if ($(window).innerWidth() <= 425) {
        setHeight();
    }
}
function setHeight() {
    $("img").css("height", ($(window).innerWidth() - 25) + "px");
}

$(".content").on("click", rotate);
$("button").on("click", reset);
$(window).on("resize", checkAndSet);
$(window).on("load", function() {
    checkAndSet();
    $("#reset").html("Ready");
});