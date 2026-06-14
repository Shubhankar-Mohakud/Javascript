let radius;

document.getElementById("Submit-button").onclick = function(){
    radius = document.getElementById("radius-input").value;
    radius = Number(radius);
    console.log(radius);
    let button =  document.getElementById("Submit-button");
    button.textContent = "";
    button.style.width = (2*radius)+"px";
    button.style.height = (2*radius+"px");
    button.style.borderRadius = (radius)+"px";
}