import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/notfound.css';

export default class NotFound extends Component {
    constructor(props, context) {
        super(props)
    }
    
    // Render 404 not found page with a back to home button.
    render() {
        return (
            <div className="notfound-desc">Opps - The page you are looking for is not here~ <br/><Link to="/">Back to Home</Link></div>
        )
    }
}