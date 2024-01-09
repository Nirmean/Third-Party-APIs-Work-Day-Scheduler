// function to display the current date

function setCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM DD, YYYY");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDate);
}

setCurrentDay();

// function create the timetable

function setTimetable() {
    const timetableEl = $("#timetable");
    for (let i = 9; i <= 18; i++) {
        timetableEl.append(createRow(i));
    }
}
setTimetable();

function createRow(rowHour, savedText) {
    var newRow = $("<div>").addClass("row");
    var hourCol = $("<div>").addClass("col hour").text(formatHourNumber(rowHour));
    var textCol = $("<textarea>").addClass("col text-area").text(savedText);
    var saveBtn = $("<button>").addClass("col save-button");
    newRow.append(hourCol, textCol, saveBtn);




}

createRow();

// function to change timeblock colors according to time

// function to retrieve, save and display data from the local storage