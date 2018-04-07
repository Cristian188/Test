/// <reference path="IssuesListController.ts" />
/// <reference path="IssuesController.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('Controllers', [])
    .controller("IssuesListController", ["$scope", 
    "$rootScope",
    "IssuesService", 
    issuesApp.Controllers.IssuesListController])
    .controller("IssuesController", ["$scope",
    "$rootScope", 
    "IssuesService", 
    "$routeParams",
    issuesApp.Controllers.IssuesController])
    ;