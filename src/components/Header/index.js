import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
 
      <header>
        <div className="cover bg-left bg-center-l" style={{backgroundImage: 'url(img/header.svg)'}}>
          <div className="pb5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center"> 
              <div className="dtc v-mid tr pa3">
                <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/">Link</a> 
              </div>
            </nav> 
            <div className=" mt6 ph3 mw8 db center">
              <h1 className="f2 f1-l fw5 fw2 white-90 mb0 lh-title">Vivy <span className='fw4'>Design</span></h1>
              <h2 className="fw1 f3 white-80 mt3 mb4 mw6">Insights, updates and musings from the designers, researchers and writers at vivy.</h2>
              <Link className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"  to="/design-system/">Design systems</Link>
            </div>
          </div>
        </div> 
      </header>

)

export default Header
