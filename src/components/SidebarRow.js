import React from 'react'
import './SidebarRow.css'
import {Link} from "react-router-dom";

function SidebarRow({title, path}) {
    return (
        <Link className="appmanager_link" to={path}>
            <div className="appmanager_sidebarRow">
                <h2 className="appmanager_sidebarRow__title">{title}</h2>
            </div>
        </Link>
        
    )
}

export default SidebarRow
