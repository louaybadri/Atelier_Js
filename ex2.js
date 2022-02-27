color = document.querySelector("#color");
number = document.querySelector("#number");
fonts = document.querySelector("#fonts");
text = document.querySelector("#text");
color.addEventListener("input",function (){
    text.style.color= `${color.value}`;
    }
)
number.addEventListener("input",function (){
    text.style.fontSize= `${number.value}px`;
    }
)
fonts.addEventListener("input",function (){
    text.style.fontFamily= `${fonts.value}`;
    }
)
