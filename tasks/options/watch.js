module.exports = {
  options: {
    // livereload: true,
  },
  scripts: {
    files: ['js/*.js'],
    // tasks: ['jshint', 'concat', 'uglify'],
    tasks: ['jshint', 'concat'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['css/*.scss'],
    // tasks: ['sass', 'autoprefixer', 'cssmin'],
    tasks: ['sass', 'autoprefixer'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    // tasks: ['imagemin'],
    tasks: [],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}