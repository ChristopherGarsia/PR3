import React, {useEffect, useState} from 'react'
import V1 from './Videos/V1.mov'
import V2 from './Videos/V2.mov'
import V3 from './Videos/V3.mov'
import V4 from './Videos/V4.mov'
import VideoModal from './VideoModal'

function Videos(props) {
    const [active, setActive] = useState(false)
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [modalSrc, setmodalSrc] = useState(null)

    function openVideoModal(src) {
        setShowVideoModal(prev => !prev)
        setmodalSrc(src)
    }

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return (
        <div>
            {active 
                ?
                <div>
                    <div id="media" class = "media">
                        <video id="vid1" onClick={() => openVideoModal(V1)}>
                            <source src={V1}/>
                        </video>
                        <video id="vid2" onClick={() => openVideoModal(V2)}>
                            <source src={V2}/>
                        </video>
                        <video id="vid3" onClick={() => openVideoModal(V3)}>
                            <source src={V3}/>
                        </video>
                        <video id="vid4" onClick={() => openVideoModal(V4)}>
                            <source src={V4}/>
                        </video>
                    </div>
                    <VideoModal
                        setShowVideoModal={setShowVideoModal}
                        showVideoModal={showVideoModal}
                        src={modalSrc}
                    />
                </div>
                :
                null
            }
        </div>
    )
}

export default Videos