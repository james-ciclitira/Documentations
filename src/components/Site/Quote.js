import React from 'react'
import PropTypes from 'prop-types';

class Quote extends React.Component {
  render() {
    return (

        <article className={`dt w-100 mv4 ${this.props.Color}`}>
        <div className={`dtc v-mid pb3 ${this.props.TextColor}`}>
          <h1 className=" fw6 i ">{this.props.Quote}</h1>
      <cite className="f6  fw6 ttu tracked i fs-normal">{this.props.Source}</cite>
        </div>
      </article>

    )
  }
}

Quote.propTypes = {
  Quote: PropTypes.string.isRequired,
  Source: PropTypes.string.isRequired,
  Color: PropTypes.string.isRequired,
  TextColor: PropTypes.string.isRequired,
};


export default Quote
