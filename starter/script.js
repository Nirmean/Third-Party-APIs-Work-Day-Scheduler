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

// dynamically create new row and columns 
function createRow(rowHour, savedText) {
    var newRow = $("<div>").addClass("row");
    var hourCol = $("<div>").addClass("col hour").text(formatHourNumber(rowHour));
    var textCol = $("<textarea>").addClass("col text-area").text(savedText);
    var buttonCol = $("<button>").addClass("col save-button");
    newRow.append(hourCol, textCol, buttonCol);

    // add event listener to button column,
    // get the text from text area and save in local storage
    buttonCol.on("click", function() {
        var newText = textCol.val();
        localStorage.setItem("savedText" + rowHour, newText);
    });

    // retrieve the data from local storage + display in text area
    var savedText = localStorage.getItem("savedText" + rowHour, newText);
    if (savedText) {
        textCol.val(savedText);
    }


}

createRow();

// function to change timeblock colors according to time

// function to retrieve, save and display data from the local storage