import React from 'react'
import './assets/css/Sidebar.css'
import logo from './assets/images/logo.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'

function Sidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src={logo} 
                alt="logo" />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your library" Icon={LibraryMusicIcon}/>

            <br /> 
            <strong className="sidebar__title"> PLAYLISTS </strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar
