import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require("expect");
var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

describe("actions", () => {
  it('should generate searchText action', () => {
    var action = { 
      type: "SET_SEARCH_TEXT",
      searchText: "some search text"
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = { 
      type: "ADD_TODO",
      todo: {
          id: 'ididid',
          text: "test todo",
          completed: false,
          createdAt: 500,
          completedAt: undefined
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO action', (done) => {
    const store = createMockStore({})
    const todoText = "my todo item";
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO',
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
    var todos = [
      { id: 1,
        text: 'anything', 
        completed: false,
        completedAt: undefined,
        createdAt: 500
        }
      ];

    var action = { 
      type: "ADD_TODOS",
      todos
    };

    var res = actions.addTodos(action.todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = { 
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = { 
      type: "TOGGLE_TODO",
      id: 2
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
})