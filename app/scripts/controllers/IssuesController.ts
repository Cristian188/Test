/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/services/IssuesService.ts" />

module issuesApp.Controllers {

  interface IIssuesController extends ng.IScope {
     issuesList: Models.Issue[];
     issueSearch: string;
     loading: boolean;
     sortBy: string;
     sortProperties: any[];
  }

  export class IssuesController {
      public static nameController = "IssuesController";
      
      constructor(private $scope: IIssuesController,$rootScope: any, private issuesService: issuesApp.Services.IssuesService) {

        $rootScope.showBackButton = false;

        $scope.sortProperties = [
          {name:"Title", value:"title"},
          {name:"Most commented", value:"-comments"},
          {name:"Least commented", value:"comments"},
        ];
        
        $scope.loading = true;
        // Load Issues.
        this.getIssues();
      }

      public getIssues(){
        this.issuesService.getAgularIssues().then((issues: any) => {
          this.$scope.issuesList = issues;
        }).finally(()=>{
          this.$scope.loading = false;
        });;
      }
  }
}