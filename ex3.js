x = document.querySelectorAll("i");
_name = document.querySelector("#Name");
content = document.querySelector("#Content");
inputs = document.querySelectorAll("input");
button = document.querySelector("button");
tasks = document.querySelector("#tasks");

//functions
function delOnClick(clickable) {
    clickable.addEventListener("click", (e) => {
        target = e.target.parentNode;
        target.parentNode.parentNode.removeChild(target.parentNode);
    })
}

function enableButton(inp) {
    //check the length of inputs and enable the button
    inp.addEventListener("input", () => {
        if ((_name.value.length != 0) & (content.value.length != 0)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    })
}


inputs.forEach(x => {
    enableButton(x);
})


button.addEventListener("click", (e) => {
    tasks.innerHTML += `<div class="card" style="margin-bottom: 30px">
            <div class="card-body">
                ${_name.value} : ${content.value}  
                <i class="bi-trash3-fill"></i>
            </div>
        </div>`;
    _name.value = "";
    content.value = "";
    button.disabled = true;
    target = document.querySelectorAll("i");
    target.forEach(x => {
        delOnClick(x);
    })
})

