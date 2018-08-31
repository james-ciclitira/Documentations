import React from 'react'
import SectionTitle from '../../components/Site/SectionTitle.js'

const Logo = () => (

        <main id='Logo' className="ph3 ph5-ns pt5">
        <SectionTitle Number='03' Title='Logo'/>
        <p className="f5 lh-copy measure primary">
          Typography has one plain duty before it and that is to convey information
          in writing. No argument or consideration can absolve typography from this
          duty. A printed work which cannot be read becomes a product without
          purpose.
        </p>
          <article className="pv5 dt w-100 ba mb4 divider mt5">
           <div  className="dtc v-mid tc white ph3 ph4-l">
              <img className='pv3 center auto' src='../img/logo-complete.svg'/>
        </div>
      </article>
      <a className='primary Link link dim' href='../img/vivy_logo.zip' download>Image download </a>
      <a className='primary ml3 link dim' href='../img/logo-complete.svg' download>Vector download</a>


       <article className="pv5 dt w-100 ba mb4 divider mt5">
           <div  className="dtc v-mid tc white ph3 ph5-l">
              <img className='pv5 center auto' src='../img/logo_2.svg'/>
        </div>
      </article>
      <a className='primary Link link dim' href='../img/vivy_logo_2.zip' download>Image download </a>
      <a className='primary ml3 link dim' href='../img/logo_2.svg' download>Vector download</a>


      </main>

)

export default Logo
