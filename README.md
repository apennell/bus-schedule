# Bus Scheduling Challenge

By [Annie Pennell](https://www.linkedin.com/in/anniepennell/) | [anniepennell.com](https://anniepennell.com/)

[View Demo](http://apennell.github.io/bus-schedule)

## Goal

The goal of this project is to allow a user to create, edit, and view a bus schedule for the 38 Geary bus route.
Its simple UI shows which trips are currently assigned to each bus, each bus' start and end times, and move trips from one bus to another without creating conflicts.

This project meets all requirements and bonus steps, but with extra time I would take these next steps:
* add basic tests using Jest to ensure it always works as expected
* improve the responsiveness of the design, which is currently very minimal
* look into using JS maps or objects, rather than arrays, for the buses and trips to avoid the more complicated lookups I used, which _may_ have been easier with the use of objects (I chose to use arrays for MVP because it seemed simpler for ordering and interating)
* improve the overall styling of the UI

## Technologies 

This app uses ReactJS, Javascript, CSS, HTML, and JSON, and was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app).

## Dependencies

* Node >= 8.1 on your machine--you can use [nvm](https://github.com/creationix/nvm) to easily switch Node versions between different projects.

## Instructions

1. Clone locally using `git clone https://github.com/apennell/bus-schedule.git` (https) or `git clone git@github.com:apennell/bus-schedule.git` (SSH).
2. `cd` into `bus-schedule` directory.
3. Run `yarn install` or `npm install` to install the project's dependencies.
4. Run `yarn start` or `npm start` to run the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
6. To build the app for production and bundle to optimize for best performance, run `yarn build` or `npm run build`.
