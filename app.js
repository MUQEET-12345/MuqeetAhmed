let display = document.getElementById("input-feild");
// console.log(display.value)
const button = document.querySelectorAll("button");
let str = "";
let buttonArray =  Array.from(button);
buttonArray.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if(e.target.innerHTML == "DEL"){
            str = str.substring(0, str.length-1);
            display.value = str;
        }else if(e.target.innerHTML == "AC"){
            str = "";
            display.value = str;
        }else if(e.target.innerHTML == "="){
            str = eval(str);
            display.value = str;
        } else  
        {
            str += e.target.innerHTML;
            display.value = str;
        } 
        });
    });
        // console.log(e.target.innerHTML);