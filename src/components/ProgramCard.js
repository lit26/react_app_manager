import React from 'react'
import './ProgramCard.css'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function ProgramCard({title,description}) {
    return (
        <div className="programCard">
            <FolderOpenIcon />
            <div className="programCard__info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div> 
        </div>
    )
}

export default ProgramCard
