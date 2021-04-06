import React from 'react'
import './ConferenceRoom.css'

function ListItem(props) {
    return <div>
        <li>{props.value}</li>
    </div>;
}
function ConferenceRoom(props) {
    const rooms = props.rooms;

    return (
        <div className='conference-room-container'>
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
