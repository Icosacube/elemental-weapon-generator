import React from 'react';
import "../../App.css"
import "./weapon.css"
import Elements from "./elements.json"


class Element extends React.Component {
    constructor() {
        super()
        let { weapon, image } = Elements[0]
        this.state = {
            image: image,
            element: weapon
        }

        // assign the stuff
        this.assignRand = this.assignRand.bind(this)
    }

    assignRand() {
        let { weapon, image } = WeaponsList[Math.floor(Math.random() * WeaponsList.length)];
        this.setState({weapon : weapon})
        this.setState({image : image})
        console.log(this.state)
    }

    render() {

        return <div className="Weapon">
            <img src={this.state.image} alt={this.state.weapon + "imagefile"}></img>
            <p>{this.state.weapon}</p>
            <button onClick={this.assignRand}>CLICKME</button>
        </div>
    }
}

export default Weapon