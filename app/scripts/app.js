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
        var IssuesController = (function () {
            function IssuesController($scope, $rootScope, issuesService) {
                this.$scope = $scope;
                this.issuesService = issuesService;
                $rootScope.showBackButton = false;
                this.getIssues();
            }
            IssuesController.prototype.getIssues = function () {
                var _this = this;
                this.issuesService.getAgularIssues().then(function (issues) {
                    _this.$scope.issuesList = issues;
                });
            };
            IssuesController.nameController = "IssuesController";
            return IssuesController;
        }());
        Controllers.IssuesController = IssuesController;
    })(Controllers = issuesApp.Controllers || (issuesApp.Controllers = {}));
})(issuesApp || (issuesApp = {}));
var issuesApp;
(function (issuesApp) {
    var Controllers;
    (function (Controllers) {
        var IssueController = (function () {
            function IssueController($scope, $rootScope, issuesService, $routeParams) {
                var _this = this;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.issuesService = issuesService;
                this.$routeParams = $routeParams;
                $rootScope.showBackButton = true;
                this.getIssue($routeParams.issueNumber).then(function () {
                    _this.getIssueCooments();
                });
            }
            IssueController.prototype.getIssue = function (id) {
                var _this = this;
                return this.issuesService.getAgularIssue(id).then(function (issue) {
                    _this.$scope.currentIssue = issue;
                });
            };
            IssueController.prototype.getIssueCooments = function () {
                var _this = this;
                this.issuesService.getIssueComments(this.$scope.currentIssue).then(function (comments) {
                    if (comments != null) {
                        _this.$scope.comments = comments;
                        _this.$scope.showNoComments = comments.length == 0;
                    }
                });
            };
            IssueController.nameController = "IssueController";
            return IssueController;
        }());
        Controllers.IssueController = IssueController;
    })(Controllers = issuesApp.Controllers || (issuesApp.Controllers = {}));
})(issuesApp || (issuesApp = {}));
angular.module('Controllers', [])
    .controller("IssuesController", ["$scope",
    "$rootScope",
    "IssuesService",
    issuesApp.Controllers.IssuesController])
    .controller("IssueController", ["$scope",
    "$rootScope",
    "IssuesService",
    "$routeParams",
    issuesApp.Controllers.IssueController]);
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
            controller: issuesApp.Controllers.IssuesController.nameController, templateUrl: 'views/main.html'
        })
            .when('/:issueNumber', {
            controller: issuesApp.Controllers.IssueController.nameController, templateUrl: 'views/issue.html'
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