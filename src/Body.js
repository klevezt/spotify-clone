import { Favorite } from '@material-ui/icons';
import { MoreHoriz } from '@material-ui/icons';
import { PlayCircleFilled } from '@material-ui/icons';
import React from 'react'   
import './assets/css/Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log("🤞" +discover_weekly);
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img 
                    src={discover_weekly?.images[0].url} 
                    alt='none'
                />
                <div className="body__infoText">
                    <strong>{discover_weekly?.name}</strong>
                    <h2>{discover_weekly?.description}</h2>
                </div> 

                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilled className="body__shuffle"/>
                        <Favorite fontSize="large" />
                        <MoreHoriz />
                    </div>
                    
                </div>                
            </div>
            {discover_weekly?.tracks.items.map((item) =>{
                        return <SongRow track={item.track} />
            })}
        </div>
    )
}

export default Body
