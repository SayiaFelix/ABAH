var project = setInterval(projectDone, 80);
var clients = setInterval(happyClients, 50);
var awards = setInterval(awardsReceived, 350);
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if (count1 == 31) {
        clearInterval(project);
    }
}

function happyClients() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;
    if (count2 == 89) {
        clearInterval(clients);
    }
}

function awardsReceived() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;
    if (count3 == 7) {
        clearInterval(awards);
    }
}