import React, { Component } from 'react';

const Filter = ({filters, handleChange}) => {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.state.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }
Filter.defaultProps = {
  filters: [],
  handleChange: null
}
export default Filter;
