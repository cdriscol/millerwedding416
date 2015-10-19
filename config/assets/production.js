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
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
