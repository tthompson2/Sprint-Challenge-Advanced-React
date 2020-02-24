import React from "react";

function PlayerCard(props) {

    console.log(props.data);

    return (
        <div>
            Name List:
            {props.data.map(player => {
                return (
                <div>
                <div>*******************************************************************</div>
                <div>Name: {player.name} </div>
                <div>Country: {player.country}</div>
                <div> Id: {player.id}</div>
                <div>Searches: {player.searches}</div>
                </div>
                );
            }
            
            )}
        </div>
    )
}

export default PlayerCard;