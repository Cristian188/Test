/// <reference path="controllers/IssuesController.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-bootstrap/index.d.ts" />
/// <reference path="controllers/Controllers.ts" />
/// <reference path="services/Services.ts" />

var app = angular.module('issuesApp',
    ['ngRoute',
    'Services',
    'Controllers']);

app.config(["$routeProvider",
    function ($routeProvider: ng.route.IRouteProvider) {

        $routeProvider
            .when('/', {
                controller: issuesApp.Controllers.IssuesController.nameController, templateUrl: 'views/main.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);