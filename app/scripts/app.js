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
            function IssuesController($scope, issuesService) {
                this.$scope = $scope;
                this.issuesService = issuesService;
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
angular.module('Controllers', [])
    .controller("IssuesController", ["$scope",
    "IssuesService",
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
            controller: issuesApp.Controllers.IssuesController.nameController, templateUrl: 'views/main.html'
        })
            .otherwise({
            redirectTo: '/'
        });
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