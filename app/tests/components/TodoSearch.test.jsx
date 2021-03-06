var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

import {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })

  it ("should call dispatch on any text", () => {
    var searchText = "new text"
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var todoSearch =
        TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    
    expect(spy).toHaveBeenCalledWith(action);
  });

  it ("should get called on check", () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = expect.createSpy();
    var todoSearch =
        TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});