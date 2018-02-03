const request = require('request');
const lodashFilter = require('lodash.filter');
const lodashTake = require('lodash.take');

const url =
    'https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=100/json?callback-?';

function findTopSong(searchTerm, limit) {
    request.get(url, function(error, response, body) {
        if (error) {
            throw error;
        }

        const result = JSON.parse(body);

        const topSong = lodashTake(
            lodashFilter(result.feed.entry, function(entry) {
                return entry.category.attributes.term === searchTerm;
            }),
            limit
        );

        let message;

        if (topSong[0]) {
            message = `Today's top ${searchTerm} song is: ${
                topSong[0].title.label
            }`;
        } else {
            message = `Sorry, no ${searchTerm} songs found in the Top ${limit}. Tip: try 'Pop', 'Hip Hop/Rap', or 'Country'`;
        }

        console.log(message);
    });
}

findTopSong('Pop', 10);
