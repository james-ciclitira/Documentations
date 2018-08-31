import React from 'react'
import Link from 'gatsby-link'
import Logo from '../components/System/Logo.js'
import Colors from '../components/System/Colors.js'
import Typography from '../components/System/Typography.js'
import Iconography from '../components/System/Iconography.js'
import Illustrations from '../components/System/Illustrations.js'
import Principles from '../components/System/Principles.js'
import Vision from '../components/System/Vision.js'
import Header from '../components/System/Header.js'
import Rows from '../components/System/Rows.js'
import Dividers from '../components/System/Dividers.js'
import List from '../components/System/List.js'
import Footer from '../components/System/Footer.js'
import Shadows from '../components/System/Shadows.js'


const IndexPage = () => (

<div >
  <header>
    <div className="cover bg-left bg-center-l overflow-auto relative">
      <img className='w-100' src='../img/header.svg'/>
    </div> 
  </header>
<div>
    <div style={{width: '76%'}} className='w-100 fr dib v-top'>
    <Principles/>
    <Vision/>
    <Logo/>
    <Colors/>
    <Typography/>
    <Iconography/>
    <Illustrations/>
    <Header/>
    <Rows/>
    <Dividers/>
    <Shadows/>
    <List/>
    <Footer/>

    </div>
  </div>
  </div>
)

export default IndexPage
