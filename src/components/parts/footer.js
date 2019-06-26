import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footLeft">
                    <div>
                        powered by React.js
                    </div>
                    <div className="cb">
                        created by Justin Harrison and Nathaniel Young
                    </div>
                </div>
                <div className="footRight">
                    <div>
                        Version: 0.1
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer