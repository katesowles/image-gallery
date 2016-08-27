/* globals angular, chai */

const {assert} = chai;

describe('album', ()=>{

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController=>{
    $component = $componentController;
  }));

  it('initializes view set as list', ()=>{
    const component = $component('album');
    assert.equal(component.view, 'list');
  });

});
