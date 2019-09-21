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

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);
}
