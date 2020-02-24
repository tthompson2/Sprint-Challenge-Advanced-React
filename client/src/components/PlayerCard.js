import React from "react";

function PlayerCard(props) {

    console.log(props.data);

    return (
        <div>
            Name List:
            {props.data.map(player => {
                return (
                <div>
                {player.name}
                {player.country}
                {player.id}
                {player.searches}
                </div>
                );
            }
            
            )}
        </div>
    )
}

export default PlayerCard;