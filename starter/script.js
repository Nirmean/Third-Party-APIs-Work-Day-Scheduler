var currentHour = dayjs().format('H');
console.log(currentHour);

// function to display the current date
function setCurrentDay() {
    const currentDayStr = dayjs().format("dddd, MMMM DD, YYYY");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDayStr);
}

// function to create the timetable
function initialisePage() {
    setCurrentDay();
    const timetableEl = $("#timetable");
    for (let i = 9; i <= 18; i++) {
        timetableEl.append(createRow(i));
    }
}

// dynamically create new row and columns 
function createRow(rowHour, savedText) {
    var newRow = $("<div>").addClass("row");
    var hourCol = $("<div>").addClass("col hour").text(formatHourNumber(rowHour));
    var textCol = $("<textarea>").addClass("col time-block").text(savedText);
    var buttonCol = $("<button>").addClass("col saveBtn").text("Save");
    newRow.append(hourCol, textCol, buttonCol);

    // add event listener to button column,
    // get the text from text area and save in local storage
    buttonCol.on("click", function() {
        var newText = textCol.val();
        localStorage.setItem("savedText" + rowHour, newText);
    });

    // retrieve the data from local storage + display in text area
    var savedText = localStorage.getItem("savedText" + rowHour);
    if (savedText) {
        textCol.val(savedText);
    }

    // add classes to text col to identify whether past, present, future
    if (rowHour < currentHour) {
        textCol.addClass("past");
    } else if (rowHour == currentHour) {
        textCol.addClass("present");
    } else {
        textCol.addClass("future");
    }

    return newRow
}

createRow();

function formatHourNumber(hourNumber) {
    if (hourNumber === undefined || hourNumber === null) {
        return "Invalid hour number";
    }
    var hourString = "";
    if (hourNumber > 12) {
        hourNumber = hourNumber - 12;
        hourString = hourNumber.toString();
        hourString = hourString + "PM";

    } else if (hourNumber == 12) {
        hourString = "12PM";

    } else if (hourNumber == 0) {
        hourString = "12AM";

    } else {
        hourString = hourNumber.toString();
        hourString = hourString + "AM";
    }

    return hourString;
}

$(document).ready(function() {
    initialisePage();
})

// function to change timeblock colors according to time

// function to retrieve, save and display data from the local storage