import React, {useEffect, useState} from 'react'

function Tab(props) {
    const [name, setName] = useState('label')

    useEffect(() => {
        props.id === props.activeId ? setName('labelActive') : setName('label')
    }, [props.activeId])

    return (
        <div className='tab'>
            <h1 className={name} onClick={ () => props.setActiveId(props.id)}>{props.label}</h1>
        </div>
    )
}

export default Tab