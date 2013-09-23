'use strict';

angular.module('hackdroidApp', ['ngRoute','ngResource', 'ngCookies'])
  .config(function ($routeProvider, $interpolateProvider) {

    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    $routeProvider
    .when('/',             { templateUrl: '/home' })
    .when('/:p',        { templateUrl: function(params) {
        return [params.p].join('/'); 
    }})
    .when('/:p/:v',        { templateUrl: function(params) {
        return [params.p, params.v].join('/'); 
    }})
        .otherwise({ redirectTo: '/' });
  });
