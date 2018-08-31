import React from 'react'
import PropTypes from 'prop-types';

class SectionTitle extends React.Component {
  render() {
    return (
    	<div className='mt4 mb2'>
		<span  className='fw7 absolute brand o-60 depth' style={{fontSize:'6em', marginLeft:'-72px', marginTop:'-56px', zIndex:'-222'}}>{this.props.Number}</span>
		<h1 style={{zIndex:'20000000'}} className='f3 pt1  f1-m f-subheadline-l'>{this.props.Title}</h1>
    	</div>
    )
  }
}

SectionTitle.propTypes = {
  Number: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
};


export default SectionTitle
