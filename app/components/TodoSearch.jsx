var React = require("react");

var TodoSearch = React.createClass({
  onChange: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onChange(showCompleted, searchText);
  },

  render: function() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos"
            onChange={this.onChange}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" 
              onChange={this.onChange}></input>
            Show Completed
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;