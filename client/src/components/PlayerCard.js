import React from "react";

function PlayerCard(props) {

    return (
        <div>
            Name List:
            {props.playerData.map(player => {
                {player.name}
                {player.country}
                {player.id}
                {player.searches}
            })}
        </div>
    )
}

export default PlayerCard;