import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard.js";

class Retrieve extends React.Component {

    constructor() {
        super();
        this.state = {
            playerData: []
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

        console.log(this.state.playerData);

        return (
            <div>
                Retrieval Successful:
                <PlayerCard 
                data = {this.state.playerData}
                />
            </div>
        )
    }
}

export default Retrieve;
