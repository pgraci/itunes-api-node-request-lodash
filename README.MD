# iTunes API - Node.js / Request / Lodash CLI example

Simple Node.js app showing how to connect to a remote API, manipulate data, and print output to console.

This example connects to the iTunes Top Songs feed, and allows a user to find the top song for a specified genre. You can also control how many results to search through to find a match.

## Getting Started

Clone this repo to your local system, and cd into project directory.

### Prerequisites

Node.js https://nodejs.org

### Installing

Run npm to install package dependencies

```
npm install
```

You will now have all required dependencies.

Open index.js, and change the values in `findTopSong('Pop', 10);`. This will control which genre you would like to return the top song for, and limit how many results you would like to search through.

Tip: try 'Pop', 'Hip Hop/Rap', or 'Country'.

Then run

```
node index.js
```

This will run the script, which hits the API endpoint, looks through the data, and outputs some info to the console.

## Authors

* **Phil Graci** http://philgraci.com
