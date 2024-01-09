// function to display the current date

function setCurrentDay() {
    const currentDate = dayjs().format("dddd, MMMM DD, YYYY");
    const currentDayEl = $("#currentDay");
    currentDayEl.text(currentDate);
}

setCurrentDay();

// function create the timetable

// function to change timeblock colors according to time

// function to retrieve, save and display data from the local storage