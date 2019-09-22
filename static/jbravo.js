function update(row) {
    let currentObj = document.getElementById(row + "-count-current");
    let doneObj = document.getElementById(row + "-done");
    let letterObj = document.getElementById(row + "-letter");

    let done = Number(doneObj.value);
    let current = Number(currentObj.textContent);
    let total = current + done;

    currentObj.textContent = total;
    doneObj.value = "";
    letterObj.textContent = String.fromCharCode(total);
}

function enableToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;

    let containers = document.getElementsByClassName("flex-container");
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.remove("selected");
    }

    let doneObj = document.getElementById(today + "-done");
    let updateObj = document.getElementById(today + "-update");
    let containerObj = document.getElementById(today);
    doneObj.disabled = false;
    updateObj.disabled = false;
    containerObj.classList.add("selected");
}

function enableLockByDate() {
    setInterval(function() { enableToday(); }, 1000 * 60 * 5);
}
