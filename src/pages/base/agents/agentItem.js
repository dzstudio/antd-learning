import React from 'react'
import { Button, Icon } from 'antd'

export default ({agent}) => (    
    <div className={agent.status==='building' ? 'building agent-item' : 'idle agent-item'}>
        <div className="agent-thumb">
            <div></div>
        </div>
        <div className="agent-content">
            <div className="agent-content-desc">
                <label className="agent-email">{agent.email}</label>
                <label className="agent-info">| {agent.status} | {agent.ip} | {agent.target}</label>
            </div>
            <div>
                <Button type="primary" ghost icon="plus-circle" size="small">Specify Resources</Button>
                <label className="agent-res-title">| Resources:</label>
                {
                    agent.resources.map((res) => (
                        <Button key={res} className="agent-res" type="link" size="small">{res}<Icon type="close-circle" /></Button>
                    ))
                }
            </div>
        </div>
        <div className="agent-operation">
        {
            agent.status !== 'idle' ? '' :
            <Button icon="stop" type="link" size="small">Deny</Button>
        }
        </div>
    </div>
)