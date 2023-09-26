var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var v3 = document.getElementById("v3");
var v4 = document.getElementById("v4");
var lsun = document.getElementById("left-sun");
var rsun = document.getElementById("right-sun");
var next = document.getElementById("next");
var level = document.getElementById("level");

function episode1() {
  v1.style.left = "25px";
  v1.style.top = "-50px";
  v2.style.left = "-50px";
  v2.style.top = "-50px";
  v3.style.left = "-44px";
  v3.style.top = "20px";
}
function noEpisode1() {
  v1.style.left = "40px";
  v1.style.top = "-20px";
  v2.style.left = "-21.12px";
  v2.style.top = "-20px";
  v3.style.left = "-24px";
  v3.style.top = "30px";
}
function logoIn() {
  lsun.style.left = "103px";
  rsun.style.left = "-90px";
  lsun.style.opacity = "1";
  rsun.style.opacity = "1";
  lsun.style.zIndex = "10";
  rsun.style.zIndex = "10";
}
function logoOut() {
  lsun.style.opacity = "0";
  rsun.style.opacity = "0";
  lsun.style.left = "40px";
  rsun.style.left = "-50px";
  lsun.style.zIndex = "-10";
  rsun.style.zIndex = "-10";
}

console.log(window.innerWidth);

if (window.innerWidth > 1490) {
  level.addEventListener("mouseover", () => {
    setTimeout(() => {
      {
        level.style.width = "300px";
        v4.style.opacity = "0";
        next.style.letterSpacing = "-15px";
        next.style.fontSize = "100px";
        level.style.rotate = "360deg";
        setTimeout(() => {
          next.style.scale = "1 0.01";
        }, "200");
        next.style.rotate = "12deg";
        next.style.transformOrigin = "bottom right";
        next.style.transform = "scewX(20deg)";
        next.style.transform = "translate(230px, 245px)";
        setTimeout(() => {
          next.style.transform = "scewX(0deg)";
          next.style.rotate = "-1deg";
          next.style.rotate = "0deg";
          level.style.transform = "translateX(-60px)";
          next.style.transform = "translateX(130px)";
          next.style.boxShadow = "  0px 137px 55px 152px rgba(255,255,255,1)";
        }, "200");
      }
    }, "200");
  });

  level.addEventListener("mouseout", () => {
    next.style.boxShadow = "none";
    setTimeout(() => {
      level.style.width = "200px";
      v4.style.opacity = "1";
      next.style.letterSpacing = "2.2px";
      next.style.fontSize = "80px";
      next.style.scale = "1 1";
      level.style.rotate = "-360deg";
      next.style.rotate = "0deg";
      next.style.transformOrigin = "center";
      next.style.transform = "scewX(0deg)";
      next.style.transform = "translate(0px, 0px)";
      level.style.transform = "translateX(0px)";
      next.style.boxShadow = "none";
    }, "950");
  });
}
