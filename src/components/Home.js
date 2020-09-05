import React from 'react'
import Sidebar from './Sidebar'
import apps  from '../App_database'
import './Home.css'
import ProgramCard from './ProgramCard'

function Home() {
    var programs = apps.slice(1);
    return (
        <div className="appmanager_home">
            <Sidebar apps={apps} show={true} />
            <div className="appmanager_right">
                {programs.map((program, index) => (
                    <ProgramCard 
                        title={program.title}
                        description={program.description}/>
                ))}
            </div>

        </div>
    )
}

export default Home
