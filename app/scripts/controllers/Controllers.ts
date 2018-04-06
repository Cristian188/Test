/// <reference path="IssuesController.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('Controllers', [])
    .controller("IssuesController", ["$scope", 
    "IssuesService", 
    issuesApp.Controllers.IssuesController])
    ;