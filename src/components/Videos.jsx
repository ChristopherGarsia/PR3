import React, {useEffect, useState} from 'react'
import V1 from './Videos/V1.mov'
import V2 from './Videos/V2.mov'
import V3 from './Videos/V3.mov'
import V4 from './Videos/V4.mov'

function Videos(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return (
        <div>
            {active 
                ?
                <div>
                    <div id="media" class = "media">
                        <video id="vid1">
                            <source src={V1} onClickautoplay muted/>
                        </video>
                        <video id="vid2">
                            <source src={V2} autoplay muted/>
                        </video>
                        <video id="vid3">
                            <source src={V3} autoplay muted/>
                        </video>
                        <video id="vid4">
                            <source src={V4} autoplay muted/>
                        </video>
                    </div>

                    <div id="modal" class="modal">
                        <div class="modal-container-video">
                            <video id="modal-content" controls></video>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Videos