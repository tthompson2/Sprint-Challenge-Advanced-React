import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

class Retrieve extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        }
    }


componentDidMount() {

    axios
         .get("http://localhost:5000/api/players")
         .then(response => {
             console.log(response.data);

             this.setState({
                playerData: response.data,
             }) 
         })

         .catch(error => {
             console.log(error);
         })
    }

    render() {

        return (
            <div>
                <PlayerCard 
                data = {this.state.playerData}
                />
            </div>
        )
    }
}

export default Retrieve;
