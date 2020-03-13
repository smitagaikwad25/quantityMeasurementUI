import React, { Component } from 'react'
import { config } from '../configuration/configuration'


class Converter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            texfield1: 0,
            textfield2: 0,
            selector2: '',
            selector3: '',
            value2:""
        }
    }

    handleUpdateUnit(value) {
        this.setState({
            selector2: value[0],
            selector3: value[0]
        })
    }

    componentWillReceiveProps(props){
        this.setState({value2:this.props.value2})
    }

    texfield1 = (event) => {
        this.setState({ texfield1: event.target.value })
    }
    textfield2 = (event) => {
        this.setState({ textfield2: event.target.value })
    }

    secondSelector = (event) => {
        this.setState({ selector2: event.target.value })
    }

    thirdSelector = (event) => {
        this.setState({ selector3: event.target.value })
    }

    buttonClick = (event) => {
        console.log("fdghkjl",this.state.value2)
        var obj = {
            type:this.state.value2,
            unit1:this.state.selector2,
            input:this.state.texfield1,
            unit2:this.state.selector3
            
        }
        config(obj).then((res) => {

            console.log("submit ---->", res.data.data);

            this.setState({
                textfield2: res.data.data
            })
            console.log(this.textfield2)
        })
    }

    render() {
        const unitType = this.props.value.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        })
        console.log("selector2---->",this.state.selector2);
        console.log("selector3",this.state.selector3)
        
        return (

            <div>
                <form>
                    <div className="textdivstyle">
                        <input className="textfield" pattern="[0-9]" type="text" required defaultValue={0} onChange={this.texfield1         } value={this.state.textfield1}></input>

                        <input className="textfield1" pattern="[0-9]" type="text"  onChange={this.textfieldVal2} value={this.state.textfield2}></input>
                    </div>

                    <div>
                        <select className="selectors2" onChange={this.secondSelector}>
                            {unitType}
                        </select>

                        <select className="selectors3" onChange={this.thirdSelector}>
                            {unitType}
                        </select>

                        <div className="button">
                            <button type="button" onClick={this.buttonClick}>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        )

    }
}

export default Converter;