import React from 'react'
import './assets/css/SongRow.css'

function SongRow({track}) {
    return (
        <div className="songRow">
            <img className="songRow__album"
                src={track.album.images[0].url} 
                alt="" 
            />
            <div className="songRow__info">
                <h1> {track.name} </h1>
                <p>
                    {track.album.name}
                </p>
            </div>            
        </div>
    )
}

export default SongRow
