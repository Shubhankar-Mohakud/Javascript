const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");

function convert(){
    if(toF.checked){
        let temp = textbox.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toC.checked){
        let temp = textbox.value;
        temp = Number(temp);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}