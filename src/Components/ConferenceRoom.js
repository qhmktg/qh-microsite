import React from 'react'
import './ConferenceRoom.css'

const STYLES =['floor-1-bg', 'floor-2-bg', 'floor-3-bg', 'floor-4-bg', 'floor-LL-bg'];


function ListItem(props) {
    return <div>
        <li>{props.value}</li>
    </div>;
}
function ConferenceRoom(props) {
    const rooms = props.rooms;
    const checkStyling = STYLES.includes(props.style) ? props.style : STYLES[0];

    return (
        <div className={`conference-room-container ${checkStyling}`}>
            <div className="conference-room-header">
            <h2>Conference Room's</h2>
            <hr className="conference-room-underline" />
        </div>
            <ul>
                {rooms.map((room) =>
                    <ListItem key={room.toString()}
                        value={room} />
                )}
            </ul>
        </div>
    )
}

export default ConferenceRoom
