import React, { Component } from 'react'
import SubLOStore from 'SubLOStore'
import SubLOAction from 'SubLOAction'

export default class Step5 extends Component {
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
        SubLOStore.removeListener(this.onSubLoStoreUpdated.bind(this))
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
                <h1>Step5</h1>
                <OptionsButton />
                <div>
                    <select>
                        {options}
                    </select>
                </div>
                <br />
                <GetSubLOsButton />
                <div>
                    The list of subLOs
                    <hr />
                    <SubLOList subLOList={this.state.subLOs} />
                </div>
            </div>
        )
    }
}

const OptionsButton = () =>
    <button onClick={() => SubLOAction.getOptions()}>
        get options
    </button>
const GetSubLOsButton = () =>
    <button onClick={() => SubLOAction.getSubLOs()}>
        get Sub LOs
    </button>

const SubLOList = ({subLOList}) => {
    const styledSubLOs = subLOList.map( item => {
        const options = SubLOStore.getOptionsForSubLO(item.uuid)

        return <div key={item.uuid}>
            <h1>{item.title}</h1>
            <p>{item.uuid}</p>
            <div>Options: <ShowOptions options={options}/> </div>
        </div>
    })

    return <div>{styledSubLOs}</div>
}

const ShowOptions = ({options}) => {
    const styledOptions = options.map( item => <p key={item.uuid}>
        {item.title}
    </p>)
    return <div>
        {styledOptions}
    </div>
}




/*

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

 */
