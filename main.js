$(document).ready(function () {
    var plane = document.getElementById('paral-el-1');
    var rocket = document.getElementById('paral-el-2');
    var smock1 = document.getElementById('paral-el-3');
    var smock2 = document.getElementById('paral-el-4');
    plane.homePos = { x: plane.offsetLeft, y: plane.offsetTop };
    rocket.homePos = { x: rocket.offsetLeft, y: rocket.offsetTop };
    smock1.homePos = { x: smock1.offsetLeft, y: smock1.offsetTop };
    smock2.homePos = { x: smock2.offsetLeft, y: smock2.offsetTop };
    $('#hero').mousemove(function (e) {
        parallax(e, plane, 20);
        parallax(e, rocket, 29);
        parallax(e, smock1, 15);
        parallax(e, smock2, 15)
    });
});

function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
};