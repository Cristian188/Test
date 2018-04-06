/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/issuesservice.ts" />

'use strict';

describe('Service: IssuesService', () => {

  // load the service's module
  beforeEach(module('issuesApp'));

  // instantiate service
  var IssuesService;
  beforeEach(inject(_IssuesService_ => {
    IssuesService = _IssuesService_;
  }));

  it('should do something', () => {
    expect(!!IssuesService).toBe(true);
  });

});
