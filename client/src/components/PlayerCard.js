import React from "react";

function PlayerCard(props) {

    return (
        <div>
            Name List:
            {Object.entries(props).map(item => <div>{item.name}</div>)}
        </div>
    )
}

export default PlayerCard;