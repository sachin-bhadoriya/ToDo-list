
let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let lst = document.getElementById("lst");

btn.addEventListener("click", function () {
    addTask();
});

txt.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function taskComplete(event) {
    const element = event.currentTarget;
    if (element.classList.contains("lst-itm")) {
        element.classList.add("tsk-complete");
        element.classList.remove("lst-itm");
    } else {
        element.classList.remove("tsk-complete");
        element.classList.add("lst-itm");
    }
}

function addTask() {
    let txtVal = txt.value.trim();
    if (txtVal === "") return;

    let lstItm = document.createElement("LI");
    let delBtn = document.createElement("BUTTON");
    delBtn.innerHTML = " × ";
    delBtn.classList.add("btn-remove");
    lstItm.classList.add("lst-itm");
    lstItm.textContent = txtVal;

    lstItm.addEventListener("click", taskComplete);

    delBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        lst.removeChild(lstItm);
    });

    lst.appendChild(lstItm);
    lstItm.appendChild(delBtn);
    txt.value = "";
}
