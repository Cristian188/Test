module issuesApp.Controllers {
  export interface IIssueControllerScope extends ng.IScope {
    currentIssue: Models.Issue;
    comments: any[];
    showBackButton: boolean;
    showNoComments: boolean;
  }

  export interface IRouteParams extends ng.route.IRouteParamsService{
    issueNumber:number;
  }
  export class IssueController {
    public static nameController = "IssueController";

    constructor (private $scope: IIssueControllerScope, 
      private $rootScope: any,
      private issuesService: issuesApp.Services.IssuesService,
      private $routeParams: IRouteParams ) {
      
      $rootScope.showBackButton = true;
      // Load issue.
      this.getIssue($routeParams.issueNumber).then(()=>{
        this.getIssueCooments();
      });
    }

    public getIssue(id: number): ng.IPromise<void>{
      return this.issuesService.getAgularIssue(id).then((issue: Models.Issue) => {
          this.$scope.currentIssue = issue;
      });
    }

    public getIssueCooments(){
      this.issuesService.getIssueComments(this.$scope.currentIssue).then((comments: any[]) => {
          if (comments != null){
              this.$scope.comments = comments;
              this.$scope.showNoComments = comments.length == 0;
          }
      });
    }
  }
}
