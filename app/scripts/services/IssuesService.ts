/// <reference path="../../../typings/angularjs/angular.d.ts" />

module issuesApp.Services {

  export class IssuesService  {

      constructor(private $http: ng.IHttpService, 
        private $q: ng.IQService) {
          
      }
      
      // Get AngularJs issues list.
      public getAgularIssues(): ng.IPromise<any[]> {
          return this.$http.get("https://api.github.com/repos/angular/angular.js/issues").then((issues: any) => {
            if (issues == null){
              return null;
            } 

            return issues.data;
          });
      }

      // Get AngularJs issue by number.
      public getAgularIssue(id: number): ng.IPromise<Models.Issue> {
          return this.$http.get("https://api.github.com/repos/angular/angular.js/issues/"+id).then((issue: any) => {
            if (issue == null){
              return null;
            } 

            return issue.data;
          });
      }

      // Get issue comments by issue.
      public getIssueComments(issue: Models.Issue): ng.IPromise<any[]>{
          return this.$http.get(issue.comments_url).then((comments: any)=>{
            if (comments == null){
              return null;
            } 

            return comments.data;
          });
      }

  }
}