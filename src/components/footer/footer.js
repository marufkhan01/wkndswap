import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return(
            <footer className="footer footer-default footer-simple footer-highlight-bubblegum" role="contentinfo">
                <div class="container">
                    <nav class="row row-small">
                    <div class="col-xs-7">
                        <ul class="nav nav-small">
                        <li>
                            <a href="/se/legal/">Juridisk information</a>
                        </li>
                        <li>
                            <a href="/se/legal/cookies-policy/">Cookies</a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-xs-5 text-right">
                                <a class="market" href="/se/select-your-country/" title="Klicka här om du vill ändra">
                        <div class="media">
                            <div class="media-body media-middle">
                            Sverige
                            </div>
                            <div class="media-right media-middle">
                            <span class="media-object flag-icon flag-icon-se"></span>
                            </div>
                        </div>
                        </a>

                            <small class="copyright">&copy; 2018 Wkndswap</small>
                    </div>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer