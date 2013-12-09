
/**
 * Module dependencies.
 */

var open = require('open-window');
var load = require('load-script');

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

  // load('https://apis.google.com/js/plusone.js');
  // 16, 32, 64
  // https://www.gstatic.com/images/icons/gplus-64.png

  return open(url);
}