import React, {useEffect, useState} from 'react'

function Table(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return(
        <div>
            {active 
                ?
                <div id="table" class = "table">
                    <h2>Video Projects</h2>
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <th>
                                <a href="https://www.youtube.com/watch?v=pLEFdo3tHJ0">UCSB Sectionals Teaser</a>
                            </th>
                            <th>
                                Promotional Video filmed for UCSB Club Tennis during Southern California Sectionals Tournament
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <a href="https://www.youtube.com/watch?v=pLEFdo3tHJ0">2016 Tim Brauch Memorial Contest</a>
                            </th>
                            <th>
                                Promotional Video filmed for Tim Brauch Foundation during 2016 Annual Memorial Skateboarding Contest
                            </th>
                        </tr>
                    </table>
                </div>
                :
                null
            }
        </div>
    )
    
}

export default Table