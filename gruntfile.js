
module.exports = function(grunt){

	//Configuration
	grunt.initConfig({
		//pass in options to plugins, references to files, etc.
        sass: { 
           dev: {
	          files:{
	            'styles/main.css': 'styles/main.scss'
	          }
           }
        }

	});


	// Load up tasks
    grunt.loadNpmTasks('grunt-contrib-sass');





	//Register Tasks
	grunt.registerTask('run', function(){
      console.log('I am running');
	});

	grunt.registerTask('sleep', function(){
      console.log('I am sleeping');
	});


	grunt.registerTask('all', ['sleep','run']);




};