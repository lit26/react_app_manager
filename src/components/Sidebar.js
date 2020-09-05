import React, {useState, useEffect} from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'

function Sidebar({apps, show}) {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = (event) => {
        // if user hit ESC key
        if (event.keyCode === 27) {
            setKeyPressed(keyPressed => !keyPressed);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, []);

    return (
        <>
            {(keyPressed||show) &&
                <div className="appmanager_sidebar">
                    <div className="appmanager_sidebar__left">
                        <h3>React App Manager</h3>
                        <hr />
                        {apps.map((app,index)=>(
                            <SidebarRow 
                                key={index}
                                title={app.title}
                                path={app.path}/>
                        ))}
                    
                    </div>
                    <div className="appmanager_sidebar__right" onClick={() => setKeyPressed(!keyPressed)}>
                        
                    </div>
                </div>
            }
        </>
    )
}

export default Sidebar