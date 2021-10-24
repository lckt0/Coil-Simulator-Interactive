var btnAddRing = document.getElementById("btn-AddRing");
var btnRmvRing = document.getElementById("btn-RmvRing");
var coilRingBox = document.getElementById("coil_rings");
var turnCounter = document.getElementById("turncounter");

var ringCount = 0;
var dict = {
    0: 0,
    1: 23,
    2: 46,
    3: 77,
    4: 122,
    5: 177,
    6: 240,
    7: 306,
    8: 379,
    9: 470,
    10: 582,
    11: 644,
    12: 656,
    13: 745,
    14: 789,
    15: 812,
    16: 863,
    17: 895
  };

function addCoil() {
    if (ringCount < 17) {
        ringCount = coilRingBox.getElementsByClassName("coil_ring").length + 1;
    }
    let innerHtmlCodeCache = "";
    for (let i = 0; i < ringCount; i++) {
        innerHtmlCodeCache += "<div class=\"coil_ring\"></div>";
    }
    coilRingBox.innerHTML = "<div class=\"coil_start\"></div>" + innerHtmlCodeCache + "<div class=\"coil_end\"></div>";
    innerHtmlCodeCache = "";
    turnCounter.innerHTML = "Turns Count: " + ringCount + "</br>Value: " + dict[ringCount] + "μH";
}

function removeCoil() {
    if (ringCount > 0) {
        ringCount = coilRingBox.getElementsByClassName("coil_ring").length - 1;
    }
    let innerHtmlCodeCache = "";
    for (let i = 0; i < ringCount; i++) {
        innerHtmlCodeCache += "<div class=\"coil_ring\"></div>";
    }
    coilRingBox.innerHTML = "<div class=\"coil_start\"></div>" + innerHtmlCodeCache + "<div class=\"coil_end\"></div>";
    innerHtmlCodeCache = "";
    turnCounter.innerHTML = "Turns Count: " + ringCount + "</br>Value: " + dict[ringCount] + "μH";
}

btnAddRing.addEventListener("click", () => addCoil());
btnRmvRing.addEventListener("click", () => removeCoil());

function loaded() {
    setTimeout(function(){ /*window.location.href = "https://youtu.be/dQw4w9WgXcQ"; alert("Merhaba, ben Volkan Konak.");*/ }, 10000);
}