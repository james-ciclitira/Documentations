import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const linkStyles = {
  letterSpacing: '0.75px', 
  paddingTop: '16px', 
  paddingBottom: '16px'
};


const ButtonRaised = props => (
  <Link style={linkStyles} 
  className={`link dim br-pill ph4 dib mh2 white bg-brand grow fw5 ${props.TextColor} ${props.Color}`}
    to={props.to}>{props.Action}
  </Link>
);

ButtonRaised.propTypes = {
  Action: PropTypes.string.isRequired,
  To: PropTypes.string.isRequired,
  TextColor: PropTypes.string.isRequired,
  Color: PropTypes.string.isRequired,

};


export default ButtonRaised
