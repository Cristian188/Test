/// <reference path="IssuesService.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('Services', [])
    .service("IssuesService", ['$http', 
    '$q', 
    issuesApp.Services.IssuesService])
    ;