
/**
 * Module dependencies.
 */

var open = require('open-window');

/**
 * Expose `share`.
 */

module.exports = share;

/**
 * Share `url` to Google+.
 *
 * @see https://developers.google.com/+/web/share/
 * @see http://stackoverflow.com/questions/11868291/google-plus-share-and-parameters-in-url
 */

function share(url) {
  var url = 'https://plus.google.com/share'
    + '?url=' + encodeURIComponent(url);

  return open(url);
}