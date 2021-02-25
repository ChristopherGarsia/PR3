import React, { useEffect, useState, useRef} from 'react'

function VideoModal(props) {
    const modalRef = useRef()
    const [src, setSrc] = useState(null)

    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setShowVideoModal(false)
        }
    }

    useEffect(() => {
        setSrc(props.src)
    }, [props.src])

    return(
        <div>
            {props.showVideoModal ?
                <div className="modalContainer" onClick={closeModal} ref={modalRef}>
                    <video controls>
                        <source src={src}/>
                    </video>
                </div>
                :
                null
            }
        </div>
    )
}

export default VideoModal