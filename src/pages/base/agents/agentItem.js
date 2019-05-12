import React, { Component } from 'react'
import { Button, Icon, Popover, Popconfirm, Input } from 'antd'

export default class AgentItem extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            showAddResView: false,
            resourcesName: ''
        }        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({navigateTo: ''})
    }
    
    // The antd Popover component state handler.
    handleVisibleChange = (showAddResView) => {
        this.setState({ showAddResView });
    }
    
    // Hide add resource popover.
    hideAddResView = () => {
        this.setState({
            showAddResView: false,
            resourcesName: ''
        });
    }

    // Sync the resource input value to state.
    onResourcesNameChange = (e) => {
        this.setState({
            resourcesName: e.target.value
        });
    }
    
    // Create resources through onAddRes reducer.
    confirmAddRes = () => {
        const {agent, onAddRes} = this.props
        let resNames = this.state.resourcesName.trim().split(',')
        if (resNames.length > 0) {
            onAddRes(agent.id, resNames)
            this.hideAddResView()
        }
    }

    render() {
        const {agent, onDelRes} = this.props
        return (
            <div className={agent.status==='building' ? 'building agent-item' : 'idle agent-item'}>
                <div className="agent-thumb">
                    <div></div>
                </div>
                <div className="agent-operation">
                {
                    agent.status !== 'idle' ? '' :
                    <Button icon="stop" type="link" size="small">Deny</Button>
                }
                </div>
                <div className="agent-content">
                    <div className="agent-content-desc">
                        <label className="agent-email">{agent.email}</label>
                        <label className="agent-info">| {agent.status} | {agent.ip} | {agent.target}</label>
                    </div>
                    <div>
                        <Popover
                            content={
                                <div>
                                    <Input placeholder="Resources name" allowClear value={this.state.resourcesName} onChange={this.onResourcesNameChange} />
                                    <Button type="link" onClick={this.confirmAddRes} style={{marginTop:10, paddingLeft:0}}>Add Resources</Button>
                                    <Button type="link" onClick={this.hideAddResView}>Close</Button>
                                </div>
                            }
                            title="(separate multiple resources name with commas)"
                            visible={this.state.showAddResView}
                            onVisibleChange={this.handleVisibleChange}
                            placement="bottomLeft"
                            trigger="click">
                            <Button type="primary" ghost icon="plus-circle" size="small">Specify Resources</Button>
                        </Popover>
                        <label className="agent-res-title">| Resources:</label>
                        {
                            agent.resources.map((res) => (
                                <Popconfirm key={res} onConfirm={() => {onDelRes(agent.id, res)}} title="Are you sure to delete this resource?" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
                                    <Button className="agent-res" type="link" size="small">{res}<Icon type="close-circle" /></Button>
                                </Popconfirm>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}