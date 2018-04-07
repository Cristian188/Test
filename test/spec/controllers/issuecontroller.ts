/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/issuecontroller.ts" />

'use strict';

describe('Controller: IssuecontrollerCtrl', () => {

  // load the controller's module
  beforeEach(module('issuesApp'));

  var IssuecontrollerCtrl: issuesApp.IssuecontrollerCtrl,
    scope: issuesApp.IIssuecontrollerScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    IssuecontrollerCtrl = $controller('IssuecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
