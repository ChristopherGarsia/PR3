import React, {useState} from 'react'
import Tab from './Tab'

function Tablist(props) {

    return (
        <div className='tabList'>
        {
            props.labels.map( (label, index) => {
                return <Tab 
                    label={label} 
                    activeId={props.tabId} 
                    id={index} 
                    setActiveId={props.setTabId}
                />
            })
        }
        </div>
    )
}

export default Tablist