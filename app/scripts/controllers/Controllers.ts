/// <reference path="IssuesController.ts" />
/// <reference path="IssueController.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('Controllers', [])
    .controller("IssuesController", ["$scope", 
    "$rootScope",
    "IssuesService", 
    issuesApp.Controllers.IssuesController])
    .controller("IssueController", ["$scope",
    "$rootScope", 
    "IssuesService", 
    "$routeParams",
    issuesApp.Controllers.IssueController])
    ;