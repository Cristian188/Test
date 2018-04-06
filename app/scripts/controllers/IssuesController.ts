/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/services/IssuesService.ts" />

module issuesApp.Controllers {

  interface IIssuesController extends ng.IScope {
     issuesList: Models.Issue[];
  }

  export class IssuesController {
      public static nameController = "IssuesController";
      
      constructor(private $scope: IIssuesController,$rootScope: any, private issuesService: issuesApp.Services.IssuesService) {

        $rootScope.showBackButton = false;
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