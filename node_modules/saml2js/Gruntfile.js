// Gruntfile
// =========
// Tasks for development and testing.

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

	grunt.initConfig({
    watch: {
      options: {
        reload: true
      },
      dev: {
        files: ['index.js', 'Gruntfile.js'],
        tasks: ['jshint:dev']
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      dev: ['**/*.js', '!node_modules/**/*.js']
    }
  });

  grunt.registerTask('default', 'develop');
  grunt.registerTask('develop', ['watch:dev']);
};
