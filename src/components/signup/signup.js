import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return(
            <div className="signup-container">
                <div className="container">
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal" data-target="#myModal">Login</button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                        {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Signup on Wkdnswap</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Some text in the modal.</p>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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