import React from 'react';
import "../../App.css"
import "./style.css"
import Elements from "./elements.json"
import Weapons from "./weapons.json"

const lists = {
    "element": Elements, 
    "weapon": Weapons}

class RandomObj extends React.Component {
    constructor(props) {
        super(props)

        let { image, name } = lists[props.type][Math.floor(Math.random() * lists[props.type].length)]
        this.state = {
            image: image,
            name: name
        }

        // assign the stuff
        this.assignRand = this.assignRand.bind(this)
    }

    assignRand() {
        let { name, image } = lists[this.props.type][Math.floor(Math.random() * lists[this.props.type].length)];
        this.setState({name : name})
        this.setState({image : image})
        console.log(this.state)
    }

    render() {
        let {name, image} = this.state;
        return <div className={"randObj " + this.props.type}>
            <img src={image} alt={name + ".png"} className="randObjImg"></img>
            <p>Your weapon is a {name}</p>
            <button onClick={this.assignRand}>CLICKME</button>
        </div>
    }
}

export default RandomObj