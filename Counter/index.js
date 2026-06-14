let count=0;

document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = String(count);
}

document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = String(count);
}

document.getElementById("resetButton").onclick = function(){
    count=0;
    document.getElementById("countLabel").textContent = String(count);
}