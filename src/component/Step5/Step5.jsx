import React, { Component } from 'react'
import SubLOStore from 'SubLOStore'
import SubLOAction from 'SubLOAction'

export default class Step5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: SubLOStore.getOptions(),
        }
    }

    componentDidMount() {
        SubLOStore.addChangeListener(this.onSubLoStoreUpdated.bind(this))
    }

    componentWillUnmount() {
        SubLOStore.removeChangeListener(this.onSubLoStoreUpdated.bind(this))
    }

    onSubLoStoreUpdated() {
        this.setState({
            options: SubLOStore.getOptions(),
        });
    }


    render() {
        const options = this.state.options
        .map(item => <option key={item}>{item.title}</option>)

        return(
            <div>
                <h1>Step5</h1>
                <button onClick={() => SubLOAction.getOptions()}>get options</button>
                <div>
                    <select>
                        {options}
                    </select>
                </div>
            </div>
        )
    }
}
