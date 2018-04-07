module issuesApp.Controllers {
  export interface IIssuesControllerScope extends ng.IScope {
    currentIssue: Models.Issue;
    comments: any[];
    showNoComments: boolean;
    loading: boolean;
  }

  export interface IRouteParams extends ng.route.IRouteParamsService{
    issueNumber:number;
  }
  export class IssuesController {
    public static nameController = "IssuesController";

    constructor (private $scope: IIssuesControllerScope, 
      private $rootScope: any,
      private issuesService: issuesApp.Services.IssuesService,
      private $routeParams: IRouteParams ) {
      
      $rootScope.showBackButton = true;
      // Load issue.
      $scope.loading = true;
      this.getIssue($routeParams.issueNumber).then(()=>{
        this.getIssueCooments();
      }).finally(()=>{
        $scope.loading = false;
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
