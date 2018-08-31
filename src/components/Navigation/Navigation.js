import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <div className='fixed bg-white shadow w-30 h-100 ph2 dib-ns dn mw5' style={{zIndex: '99999'}}>
  <img className='w4 mt3 pt2' src='../img/letter_head.svg' />
        <ul className="ma0 pl0 measure mt3 bt divider">
           <h3 className='fw5 f5'>Vivy</h3> 
              <a href='#Principles' className="db dim primary f5 link lh-copy pv1 ml3">Principles</a>
              <a href='#Vision' className="db dim primary f5 link lh-copy pv1 ml3">Vision</a>
            <h3 className='fw5 f5'>Style</h3> 
              <a href='#Logo' className="db dim primary f5 link lh-copy pv1 ml3">Logo</a>
              <a href='#Colors' className="db dim primary f5 link lh-copy pv1 ml3">Colors</a>
              <a href='#Typography' className="db dim primary f5 link lh-copy pv1 ml3">Typography</a>
              <a href='#Icongrapghy' className="db dim primary f5 link lh-copy pv1 ml3">Icongrapghy</a>
              <a href='#Illustrations' className="db dim primary f5 link lh-copy pv1 ml3">Illustrations</a>

              <h3 className='fw5 f5'>Components</h3> 
              <a href='#Buttons' className="db dim primary f5 link lh-copy pv1 ml3">Buttons</a>
              <a href='#Inputs' className="db dim primary f5 link lh-copy pv1 ml3">Inputs</a>
              <a href='#Dropdowns' className="db dim primary f5 link lh-copy pv1 ml3">Dropdowns</a>
              <a href='#Links' className="db dim primary f5 link lh-copy pv1 ml3">Links</a>
        </ul>
        </div>
)

export default Navigation



// WEBPACK FOOTER //
// ./src/components/Navigation/Navigation.js