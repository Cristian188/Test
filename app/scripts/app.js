"use strict";
var issuesApp;
(function (issuesApp) {
    var Services;
    (function (Services) {
        var IssuesService = (function () {
            function IssuesService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            IssuesService.prototype.getAgularIssues = function () {
                return this.$http.get("https://api.github.com/repos/angular/angular.js/issues").then(function (issues) {
                    if (issues == null) {
                        return null;
                    }
                    return issues.data;
                });
            };
            IssuesService.prototype.getAgularIssue = function (id) {
                return this.$http.get("https://api.github.com/repos/angular/angular.js/issues/" + id).then(function (issue) {
                    if (issue == null) {
                        return null;
                    }
                    return issue.data;
                });
            };
            IssuesService.prototype.getIssueComments = function (issue) {
                return this.$http.get(issue.comments_url).then(function (comments) {
                    if (comments == null) {
                        return null;
                    }
                    return comments.data;
                });
            };
            return IssuesService;
        }());
        Services.IssuesService = IssuesService;
    })(Services = issuesApp.Services || (issuesApp.Services = {}));
})(issuesApp || (issuesApp = {}));
var issuesApp;
(function (issuesApp) {
    var Controllers;
    (function (Controllers) {
        var IssuesListController = (function () {
            function IssuesListController($scope, $rootScope, issuesService) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.issuesService = issuesService;
                $rootScope.showBackButton = false;
                $scope.sortProperties = [
                    { name: "Title", value: "title" },
                    { name: "Most commented", value: "-comments" },
                    { name: "Least commented", value: "comments" },
                ];
                $scope.loading = true;
                this.getIssues();
            }
            IssuesListController.prototype.getIssues = function () {
                var _this = this;
                this.issuesService.getAgularIssues().then(function (issues) {
                    _this.$scope.issuesList = issues;
                })["finally"](function () {
                    _this.$scope.loading = false;
                });
                ;
            };
            IssuesListController.prototype.$onInit = function () {
            };
            ;
            IssuesListController.nameController = "IssuesListController";
            return IssuesListController;
        }());
        Controllers.IssuesListController = IssuesListController;
    })(Controllers = issuesApp.Controllers || (issuesApp.Controllers = {}));
})(issuesApp || (issuesApp = {}));
var issuesApp;
(function (issuesApp) {
    var Controllers;
    (function (Controllers) {
        var IssuesController = (function () {
            function IssuesController($scope, $rootScope, issuesService, $routeParams) {
                var _this = this;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.issuesService = issuesService;
                this.$routeParams = $routeParams;
                $rootScope.showBackButton = true;
                $scope.loading = true;
                this.getIssue($routeParams.issueNumber).then(function () {
                    _this.getIssueCooments();
                })["finally"](function () {
                    $scope.loading = false;
                });
            }
            IssuesController.prototype.getIssue = function (id) {
                var _this = this;
                return this.issuesService.getAgularIssue(id).then(function (issue) {
                    _this.$scope.currentIssue = issue;
                });
            };
            IssuesController.prototype.getIssueCooments = function () {
                var _this = this;
                this.issuesService.getIssueComments(this.$scope.currentIssue).then(function (comments) {
                    if (comments != null) {
                        _this.$scope.comments = comments;
                        _this.$scope.showNoComments = comments.length == 0;
                    }
                });
            };
            IssuesController.prototype.$onInit = function () {
            };
            ;
            IssuesController.nameController = "IssuesController";
            return IssuesController;
        }());
        Controllers.IssuesController = IssuesController;
    })(Controllers = issuesApp.Controllers || (issuesApp.Controllers = {}));
})(issuesApp || (issuesApp = {}));
angular.module('Controllers', [])
    .controller("IssuesListController", ["$scope",
    "$rootScope",
    "IssuesService",
    issuesApp.Controllers.IssuesListController])
    .controller("IssuesController", ["$scope",
    "$rootScope",
    "IssuesService",
    "$routeParams",
    issuesApp.Controllers.IssuesController]);
angular.module('Services', [])
    .service("IssuesService", ['$http',
    '$q',
    issuesApp.Services.IssuesService]);
var app = angular.module('issuesApp', ['ngRoute',
    'Services',
    'Controllers']);
app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when('/', {
            controller: issuesApp.Controllers.IssuesListController.nameController, templateUrl: 'views/main.html'
        })
            .when('/:issueNumber', {
            controller: issuesApp.Controllers.IssuesController.nameController, templateUrl: 'views/issue.html'
        })
            .otherwise({
            redirectTo: '/'
        });
    }]).config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]).run(["$rootScope", "$window", function ($rootScope, $window) {
        $rootScope.showBackButton = false;
        $rootScope.goBack = function () { $window.history.back(); };
    }]);
var issuesApp;
(function (issuesApp) {
    var Models;
    (function (Models) {
        var Issue = (function () {
            function Issue() {
            }
            return Issue;
        }());
        Models.Issue = Issue;
    })(Models = issuesApp.Models || (issuesApp.Models = {}));
})(issuesApp || (issuesApp = {}));
//# sourceMappingURL=app.js.map