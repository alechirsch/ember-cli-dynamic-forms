/* jshint node: true */
'use strict';

var defaults = {
	handlebars: true,
	'bootstrap-css': true,
	'bootstrap-javascript': true,
	'bootstrap-fonts': true,
	'bootstrap-views': true,
  loadash: true
};

var getConfigWithDefault = function(property, defaultProperty) {
	if (property === null || property === undefined) {
		return defaultProperty;
	}

	return property;
};

module.exports = {
  name: 'ember-cli-dynamic-forms',
  included: function (app) {
    this._super.included(app);

    var options = (app && app.options['ember-cli-dynamic-forms']) || {};

    if(getConfigWithDefault(options['handlebars'], defaults['handlebars'])) {
      app.import(app.bowerDirectory + '/handlebars/handlebars.js');
    }

    if(getConfigWithDefault(options['bootstrap-javascript'], defaults['bootstrap-javascript'])) {
      app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    }

    if(getConfigWithDefault(options['bootstrap-css'], defaults['bootstrap-css'])) {
      app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
    }

    if(getConfigWithDefault(options['bootstrap-fonts'], defaults['bootstrap-fonts'])) {
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
        destDir: 'fonts'
      });
      app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
        destDir: 'fonts'
      });
    }

    if(getConfigWithDefault(options['bootstrap-views'], defaults['bootstrap-views'])) {
      app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.js');
      app.import(app.bowerDirectory + '/alpaca/dist/alpaca/bootstrap/alpaca.css');
    }

    if(getConfigWithDefault(options['loadash'], defaults['loadash'])) {
      app.import(app.bowerDirectory + '/lodash/lodash.js');
    }


  },
  isDevelopingAddon: function () {
    return false;
  }
};
