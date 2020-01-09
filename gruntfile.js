
module.exports = function(grunt){

//Configuration
grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      files: {                         // Dictionary of files
        'styles/main.css': 'styles/main.scss'       // 'destination': 'source'  
      }
    }
  }
});
 


//Load up tasks
grunt.loadNpmTasks('grunt-contrib-sass');




//Register Tasks

grunt.registerTask('sass', ['sass']);
	

	// grunt.registerTask('run', function(){
 //      console.log('I am running');
	// });

	// grunt.registerTask('sleep', function(){
 //      console.log('I am sleeping');
	// });


	// grunt.registerTask('all', ['sleep','run']);




};