'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/normalize-css/normalize.css',
				'public/lib/font-awesome/css/font-awesome.min.css',
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap.theme.css',
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/gsap/src/minified/TweenMax.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angulartics/dist/angulartics.min.js',
				'public/lib/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/modernizr/modernizr.js',
        'public/lib/jquery.easing/js/jquery.easing.min.js',
        'public/lib/classie/classie.js',
        'public/lib/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js',
				'public/modules/animations/client/animated.header.js',
				'public/lib/angular-scroll/angular-scroll.min.js',
				'public/lib/typed.js/dist/typed.min.js',
				'public/lib/waypoints/lib/jquery.waypoints.js',
				'public/lib/angulartics/src/angulartics-scroll.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/subscribe/client/subscribe.client.module.js',
      'modules/animations/client/animations.client.module.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js',
      'public/modules/animations/client/scrollspy.js',
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
