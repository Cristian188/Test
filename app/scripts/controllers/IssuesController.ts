/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/services/IssuesService.ts" />

module issuesApp.Controllers {

  interface IIssuesController extends ng.IScope {
     issuesList: Models.Issue[];
  }

  export class IssuesController {
      public static nameController = "IssuesController";
      
      constructor(private $scope: IIssuesController, private issuesService: issuesApp.Services.IssuesService) {
        // Load Issues.
        this.getIssues();
      }

      public getIssues(){
        this.issuesService.getAgularIssues().then((issues: any) => {
          this.$scope.issuesList = issues;
        });
      }
  }
}