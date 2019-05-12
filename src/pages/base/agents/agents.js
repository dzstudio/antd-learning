import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'

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
                        <AgentItem key={item.id} agent={item} />
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

function mapStateToProps(state, props) {
    return {
        agents: state.agents.agentList,
        summary: state.agents.summary
    }
}

function mapDispatchToProps(dispatch, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Agents)