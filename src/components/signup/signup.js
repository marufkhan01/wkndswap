import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return(
            <div className="signup-container">
                <div class="container">
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#myModal">Login</button>
                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                        {/* <!-- Modal content--> */}
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Signup on Wkdnswap</h4>
                                </div>
                                <div class="modal-body">
                                    <p>Some text in the modal.</p>
                                </div>
                                <   div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup