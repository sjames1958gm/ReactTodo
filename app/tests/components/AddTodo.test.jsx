var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

// Import raw component for testing.
import {AddTodo} from "AddTodo";
import * as actions from 'actions'; 

describe("AddTodo", () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  it ("should dispatch on valid todo", () => {
    var todoText = 'New Todo';
    var spy = expect.createSpy();
    var action = actions.startAddTodo(todoText);

    var addTodo = TestUtils.renderIntoDocument(
        <AddTodo dispatch={spy}/>
    );

    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
    expect(addTodo.refs.todoText.value).toEqual('');
  });

  it ("should not dispatch on empty input", () => {
    var spy = expect.createSpy();

    var addTodo =
        TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

   expect(spy).toNotHaveBeenCalled();

  });
})