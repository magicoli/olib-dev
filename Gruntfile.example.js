module.exports = function( grunt ) {

    'use strict';

    // Define the plugin name
    const pluginName = 'YOURPLUGINNAME';

    // Project configuration
    // Obsolete, library uses grunt.config.set() instead, but keep it in case we revert back
    // grunt.initConfig( {
    //     pkg: grunt.file.readJSON( 'package.json' ),
	// } );

    // Load shared custom tasks with pluginName
    require('./src/oli-brary/grunt-custom-tasks.js')(grunt, pluginName);

    grunt.util.linefeed = '\n';

};
