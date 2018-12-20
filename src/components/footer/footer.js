import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return(
            <footer className="footer footer-default footer-simple footer-highlight-bubblegum" role="contentinfo">
                <div className="container">
                    <nav className="row row-small">
                    <div className="col-xs-7">
                        <ul className="nav nav-small">
                        <li>
                            <a href="/se/legal/">Juridisk information</a>
                        </li>
                        <li>
                            <a href="/se/legal/cookies-policy/">Cookies</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-xs-5 text-right">
                                <a className="market" href="/se/select-your-country/" title="Klicka här om du vill ändra">
                        <div className="media">
                            <div className="media-body media-middle">
                            Sverige
                            </div>
                            <div className="media-right media-middle">
                            <span className="media-object flag-icon flag-icon-se"></span>
                            </div>
                        </div>
                        </a>

                            <small className="copyright">&copy; 2018 Wkndswap</small>
                    </div>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer