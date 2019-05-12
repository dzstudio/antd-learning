import React from 'react'
import { Button, Icon } from 'antd'

export default ({summary}) => (    
    <div className="agent-summary">
        <label className="agent-summary-title">Summary</label>
        <div className="agent-summary-content">
            <p><label>building</label><span>{summary.building}</span></p>
            <p><label>idle</label><span>{summary.idle}</span></p>
        </div>
        <label className="agent-summary-title">History</label>
        <div className="agent-summary-content">
        {
            summary.history.map((item) => (
                <p><label>{item}</label></p>
            ))
        }
        </div>
    </div>
)