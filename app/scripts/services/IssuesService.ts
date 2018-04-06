/// <reference path="../../../typings/angularjs/angular.d.ts" />

module issuesApp.Services {

  export class IssuesService  {

      constructor(private $http: ng.IHttpService, 
        private $q: ng.IQService) {
          
      }

      public getAgularIssues(): ng.IPromise<any[]> {
          return this.$http.get("https://api.github.com/repos/angular/angular.js/issues").then((issues: any) => {
            if (issues == null){
              return null;
            } 

            return issues.data;
          });
      }

  }
}