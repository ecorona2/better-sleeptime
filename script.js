const colors = [
    "rgb(168, 39, 254)",
    "rgb(154, 3, 254)",
    "rgb(150, 105, 254)",
    "rgb(140, 140, 255)",
    "rgb(187, 187, 255)",
    "rgb(143, 254, 221)",
]

function createWakeUpTimeElement(time, cycle) {
    let elm = document.createElement("div");
    elm.innerText = time;
    elm.style.color = colors[cycle];
    return elm;
}

function handleOnClick() {

    // display the output div element on click
    let output = document.querySelector(".output");
    output.style.display = "block";

    // get the hours display element and clear the times
    let hours = document.getElementById("hours");
    hours.innerHTML = "";

    // retrieve user's selected hours and minutes
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("AMPM").value;

    // convert hours depending on AM/PM setting
    hh = ampm === "PM" ? Number.parseInt(hh) + 12 : hh;

    // initialize time using user's input
    let selectedTime = new Date();
    selectedTime.setHours(hh);
    selectedTime.setMinutes(mm);

    // generate six sleep cycles
    for (let i = 1; i <= 6; i++) {
        selectedTime.setMinutes(selectedTime.getMinutes() + 90);

        // generate hour element and append to the hours element
        const elm = createWakeUpTimeElement(
            selectedTime.toLocaleTimeString("en-US", {timeStyle: "short"}),
            i
        )
        hours.appendChild(elm);
    }
}