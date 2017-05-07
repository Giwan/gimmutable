import React, { Component } from 'react'
import SubLOStore from 'SubLOStore'
import SubLOAction from 'SubLOAction'

export default class Step4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: SubLOStore.getOptions(),
            subLOs: SubLOStore.getSubLOs(),
        }
    }

    componentDidMount() {
        SubLOStore.addListener(this.onSubLoStoreUpdated.bind(this))
    }

    componentWillUnmount() {
        // SubLOStore.removeListener(this.onSubLoStoreUpdated.bind(this))
    }

    onSubLoStoreUpdated() {
        const newOptions = SubLOStore.getOptions()
        const subLOs = SubLOStore.getSubLOs()
        this.setState({
            options: newOptions,
            subLOs: subLOs
        })
    }


    render() {
        const options = this.state.options
        .map(item => <option key={item.uuid}>{item.title}</option>)


        return(
            <div>
                <h1>Step4</h1>
            </div>
        )
    }
}
