import React, { Component } from 'react'
import SubLOStore from 'SubLOStore'
import SubLOAction from 'SubLOAction'

export default class Step3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: SubLOStore.getOptions(),
            subLOs: SubLOStore.getSubLOs(),
        }

        this._stores = [];
        this._subLoStoreUpdated = this._subLoStoreUpdated.bind(this)
    }

    componentDidMount() {
        this._stores.push(SubLOStore.addListener(this._subLoStoreUpdated))
    }

    componentWillUnmount() {
        this._stores.map( store => store.remove() )
    }

    _subLoStoreUpdated() {
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
                <h1>Step3</h1>
            </div>
        )
    }
}
