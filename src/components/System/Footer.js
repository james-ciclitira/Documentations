import React from 'react'
import Link from 'gatsby-link'


class Footer extends React.Component {
  render() {
    return (

 <footer className="pv4-ns pv2 mt4-ns mt0 pa0-ns pa3 mt4 bt b--black-10 bg-white overflow-auto">
        <div className="mw8 db center">
          <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
            <h4 className="fw5 mb3 f7">CONTACT</h4>
            <a href="mailto:support@numilli.com" className="link f6 dim lh-solid b db pv2 link-active">
              Email: Design@vivy.com</a>
          </article>
          <article className="fl w-60 dib-ns w-auto-ns mr4-m mr5-l ml5-ns ml0 mb4 pr2 pr0-ns">
            <h4 className="fw5 mb3 f7">NAVIGATION</h4>
            <div className="fl w-auto">
              <Link className="f6 db mt2 dim link link-active" to="/blog">Blog</Link>
              <Link className="f6 db mt2 dim link link-active" to="/faq">FAQ</Link>
            </div>
            <div className="fl w-auto ml3 pl3">
              <Link className="f6 db mt2 dim link link-active" to="/terms">Terms of Service</Link>
              <Link className="f6 db mt2 dim link link-active" to="/privacy">Privacy Policy</Link>
            </div>
          </article>
          <article className="fr-ns fl w-100 dib-ns w-auto-ns pr2 pr0-ns v-top">
            <h4 className="fw5 mb3 f7 mb2">DOWNLOAD</h4>
            <a className="ml4-ns ml0 fr-ns dib grow" target="blank" href="https://itunes.apple.com/us/genre/ios/id36?mt=8"><img src="/img/app-store.svg" alt="Download from app store" /></a>
            <a className="fr-ns dib grow" target="blank" href="https://play.google.com/store?hl=en_GB">
              <img src="img/google.svg" alt="Download from GooglePlay" /></a>
          </article>
        </div>
      </footer>

    )
  }
}
export default Footer
