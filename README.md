# Third-Party APIs: Work Day Scheduler

## Description

A simple calendar application that allows you save events, appointments and meetings during your busy workday. Easily keep track of the hour of the day with color coded rows. Grey indicates a time in the past, red is the present time, and green are future time slots.

## Solution URL:
https://nirmean.github.io/Third-Party-APIs-Work-Day-Scheduler/

## The Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/docs/en/display/format) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)


## Instructions For Use

1. open the browser, click on the text area and begin entering events/ reminders you want to keep track of for the day.
2. Click the save button to save the event.
3. If you refresh your page, your entries should still be visible.
