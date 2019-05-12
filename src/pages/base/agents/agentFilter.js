import React from 'react'
import { Button } from 'antd'

export default () => (
    <div id="agentsFilter">
        <label>Agents</label>
        <Button>All</Button>
        <Button type="primary">Physical</Button>
        <Button>Virtual</Button>
    </div>
)