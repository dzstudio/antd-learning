import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'

import { agentActions } from '../../../store'
import AgentFilter from './agentFilter'
import AgentItem from './agentItem'
import AgentSummary from './agentSummary'

import '../../../styles/agents.css'

const Agents = ({agents, summary, onAddAgentRes, onDelAgentRes}) => {
    return (
        <div>
            <AgentFilter />
            <Row id="agentContent" className="row">
                <Col id="agentList" span={18}>
                {
                    agents.map((item) => (
                        <AgentItem key={item.id} agent={item} onAddRes={onAddAgentRes} onDelRes={onDelAgentRes} />
                    ))
                }
                </Col>
                <Col id="agentSummary" span={6}>
                    <AgentSummary summary={summary} />
                </Col>
            </Row>
        </div>
    )
}

// Mapping root store state to agent component.
function mapStateToProps(state, props) {
    return {
        agents: state.agents.agentList,
        summary: state.agents.summary
    }
}

// Mapping root store reducer to agent component.
function mapDispatchToProps(dispatch, props) {
    return {
        onAddAgentRes: (agentId, names) => {
          dispatch(agentActions.agentResourceAdd(agentId, names));
        },
        onDelAgentRes: (agentId, name) => {
          dispatch(agentActions.agentResourceDel(agentId, name));
        }
    }
}

// Use the connect method provided by react-redux to bind state and reducer automatically.
export default connect(mapStateToProps, mapDispatchToProps)(Agents)