/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/issues.ts" />

'use strict';

describe('Controller: IssuesCtrl', () => {

  // load the controller's module
  beforeEach(module('issuesApp'));

  var IssuesCtrl: issuesApp.IssuesCtrl,
    scope: issuesApp.IIssuesScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    IssuesCtrl = $controller('IssuesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
