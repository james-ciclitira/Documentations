import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'


class ButtonFlat extends React.Component {
  render() {
    return (


<Link style={{letterSpacing: '0.75px', paddingTop: '16px', paddingBottom: '16px'}} 
 	  className={`link dim br-pill ph4 dib grow fw5 ${this.props.TextColor}`}
      to={this.props.to}>{this.props.Action}
</Link>
       
    )
  }
}

ButtonFlat.propTypes = {
  Action: PropTypes.string.isRequired,
  To: PropTypes.string.isRequired,
  TextColor: PropTypes.string.isRequired,

};


export default ButtonFlat
