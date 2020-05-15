var signe = -1;
var Fading = function(){
var obj = document.getElementById('titre');
if (obj.style.opacity >= 0.96){
signe = -1;
}
if (obj.style.opacity <= 0.04){
signe = 1;
}
obj.style.opacity = (obj.style.opacity * 1) + (signe * 0.04);
};

periode = setInterval(Fading, 85 );