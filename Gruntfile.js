module.exports = function(grunt) {

  grunt.initConfig({
    phantomcss: {
      options: {},
      your_target: {
        options: {
          screenshots: 'test/visual/screenshots/',
          results: 'results/visual/'
        },
        src: [
          'test/*.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-phantomcss');

  grunt.registerTask('default', ['phantomcss']);

};