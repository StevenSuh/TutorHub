import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './style.module.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.props.location.state = this.props.location.state || {};

    const query = this.props.location.state.query || this.props.query;

    this.state = {
      query,
    };
  }

  render() {
    console.log(this.props);

    return (
      <div className={style.search_results_page}>Search Results</div>
    );
  }
}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
};

SearchResults.defaultProps = {
  query: '',
};

export default SearchResults;
