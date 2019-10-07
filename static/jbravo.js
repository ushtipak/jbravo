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

function getDDMMYYYY(date) {
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();
    return dd + "-" + mm + "-" + yyyy;
}

function enableToday() {
    let containers = document.getElementsByClassName("flex-container");
    [].forEach.call(containers, function (container) { container.classList.remove("selected"); });

    let today = new Date();
    let todayStr = getDDMMYYYY(today);

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yesterdayStr = getDDMMYYYY(yesterday);

    let yesterdayDoneObj = document.getElementById(yesterdayStr + "-done");
    let yesterdayUpdateObj = document.getElementById(yesterdayStr + "-update");
    if (yesterdayDoneObj != null) {
        yesterdayDoneObj.disabled = true;
        yesterdayDoneObj.value = "—";
    }
    if (yesterdayUpdateObj != null) { yesterdayUpdateObj.disabled = true; }

    let todayDoneObj = document.getElementById(todayStr + "-done");
    let todayUpdateObj = document.getElementById(todayStr + "-update");
    let containerObj = document.getElementById(todayStr);
    todayUpdateObj.disabled = false;
    todayDoneObj.disabled = false;
    containerObj.classList.add("selected");
}

function enableLockByDate() {
    enableToday();
    setInterval(function() { enableToday(); }, 1000 * 60 * 5);
}
