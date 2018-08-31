import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../components/Header'
import './index.css'
import Navigation from '../components/Navigation/Navigation.js'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Vivy Design"
      link={[
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json'}
        ]}

      meta={[
      { name: 'description', content: 'Vivy Design documentation'},
      { name: 'keywords', content: 'Vivy, Design, Documentation, System'},
      { name: 'og:type', content: 'profile'},
      { name: 'og:title', content: 'Vivy Design documentation'},
      { name: 'og:description', content: 'Vivy Design documentation'},
      { name: 'og:url', content: 'https://miscreant-boot.surge.sh/'},
      { name: 'og:image', content: 'https://miscreant-boot.surge.sh/img/preview.png'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:creator', content: '@vivy_health'},
      { name: 'twitter:title', content: 'Vivy Design documentation'},
      { name: 'twitter:image', content: 'https://miscreant-boot.surge.sh/img/preview.png'},

      ]}
    />
    <div>
      <Navigation/>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
