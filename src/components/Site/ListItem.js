import React from 'react'
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    return (

       <li className="pt3 pt4-ns pb1 measure">
          <h1 className="i  f2 db mb2">{this.props.Title}</h1>
             <h4> {this.props.Description}</h4>
        </li>
    )
  }
}

ListItem.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};


export default ListItem
