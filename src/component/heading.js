import React, { Component } from 'react'
import Converter from './converter'
import { getUnits } from '../configuration/configuration'
import { getUnitType } from '../configuration/configuration'

class Heading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unitState: '',
            unitGroupeSelected: [],
            unitList12: []
        }
        this.converter = React.createRef();
    }

    componentWillMount() {
        getUnits().then((res) => {
            this.setState({
                unitList12: res.data.data
            })
            console.log("res--> ", res.data.data);

        })
    }

    firstSelectorChang = async (event) => {
        let type = event.target.value;
        console.log("onchang event--->", type)
        await this.setState({
            unitState: event.target.value
        });
        console.log("UnitState=-> " + this.state.unitState);

        getUnitType(this.state.unitState).then((responsegetunits) => {
            console.log("response==12======--> ", responsegetunits);
            this.setState({
                unitGroupeSelected: responsegetunits.data.data
            })
            console.log("response========--> ", this.state.unitGroupeSelected);
        })
    };

    render() {
        let unitType = this.state.unitList12.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        })

    return (        
            <div>
                <select id="units" className="selectors" onChange={this.firstSelectorChang} value={this.state.unitState}>
                    {
                        [unitType]
                    })

            </select>
                {console.log("Converter Called " + this.state.unitGroupeSelected)}

                <Converter ref={this.Converter} value={this.state.unitGroupeSelected} value2={this.state.unitState} />

            </div>
        )
    }

}

export default Heading;