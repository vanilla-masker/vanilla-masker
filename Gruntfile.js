module.exports = function(grunt) {

  var config = {

    // Clean folders ================================
    clean: {
      dev: ['public/vanilla-masker.js'],
      build: ['build/vanilla-masker.min.js']
    },

    // Concat ================================
    concat: {
      options: {
        separator: ";"
      },
      dev: {
        src: [
          "src/vanilla-masker.js",
          "src/modules/*.js"
        ],
        dest: "public/vanilla-masker.js"
      },
      build: {
        src: [
          "src/vanilla-masker.js",
          "src/modules/*.js"
        ],
        dest: "build/vanilla-masker.min.js"
      }
    },

    // Minification ================================
    uglify: {
      minify: {
        files: {
          "build/vanilla-masker.min.js": ["build/vanilla-masker.min.js"]
        }
      }
    },

    // Jasmine Runner ================================
    jasmine: {
      dev: {
        src: ['public/vanilla-masker.js'],
        options: {
          specs: 'tests/*_spec.js'
        }
      },
      build: {
        src: ['build/vanilla-masker.min.js'],
        options: {
          specs: 'tests/*_spec.js'
        }
      }
    },

    // Compress ================================
    compress: {
      build: {
        options: {
          mode: 'gzip',
          level: 9,
          pretty: true
        },
        files: [
          {expand: true, flatten: true, src: ['build/*.js'], dest: 'build', ext: '.gz.js'}
        ]
      }
    },

    // Connect Server ================================
    connect: {
      dev: {
        options: {
          port: 4500,
          base: 'public'
        }
      }
    },

    // Watch Files ================================
    watch: {
      livereload: {
        options: {livereload: true },
        files: ['src/**/*'],
        tasks: ['dev']
      }
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  
  grunt.registerTask("dev", ["clean:dev", "concat:dev", "jasmine:dev", "connect", "watch"]);
  grunt.registerTask("test", ["clean:dev", "concat:dev", "jasmine:dev"]);
  grunt.registerTask("build", ["clean:build", "concat:build", "jasmine:build", "uglify", "compress"]);
};
