let btnSend = document.querySelector('button');
btnSend.addEventListener('click',() => {
    if (btnSend.style.background == "springgreen")btnSend.style.background = "tomato";
    else btnSend.style.background = "springgreen";
});
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(255, 255, 0) ' + x + '%, rgb(245, 245, 245) ' + x + '%)';
    slider.style.background = color;
});