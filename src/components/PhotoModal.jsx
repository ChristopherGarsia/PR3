import React, { useEffect, useState, useRef} from 'react'

function PhotoModal(props) {
    const modalRef = useRef()
    const [src, setSrc] = useState(null)

    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setShowImgModal(false)
        }
    }

    useEffect(() => {
        setSrc(props.src)
    }, [props.src])

    return(
        <div>
            {props.showImgModal ?
                <div className="modalContainer" onClick={closeModal} ref={modalRef}>
                    <img src={src}/>
                </div>
                :
                null
            }
        </div>
    )
}

export default PhotoModal