/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/controllers.ts" />

'use strict';

describe('Controller: ControllersCtrl', () => {

  // load the controller's module
  beforeEach(module('issuesApp'));

  var ControllersCtrl: issuesApp.ControllersCtrl,
    scope: issuesApp.IControllersScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    ControllersCtrl = $controller('ControllersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
