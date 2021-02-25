import React, {useEffect, useState} from 'react'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.JPG'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
import PhotoModal from './PhotoModal'

function Images(props) {
    const [active, setActive] = useState(false)
    const [showImgModal, setShowImgModal] = useState(false);
    const [modalSrc, setmodalSrc] = useState(null)

    function openImgModal(src) {
        setShowImgModal(prev => !prev)
        setmodalSrc(src)
    }

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return (
        <div>
        {active? 
            <div>
                <button class="button" onclick="topFunction()" id="topButton" title="Go to top">Top</button>

                <div id="media" class = "media">
                    <img src={one} onClick={() => openImgModal(one)}/>
                    <img src={two} onClick={() => openImgModal(two)}/>
                    <img src={three} onClick={() => openImgModal(three)}/>
                    <img src={four} onClick={() => openImgModal(four)}/>
                    <img src={five} onClick={() => openImgModal(five)}/>
                    <img src={six} onClick={() => openImgModal(six)}/>
                    <img src={seven} onClick={() => openImgModal(seven)}/>
                    <img src={eight} onClick={() => openImgModal(eight)}/>
                </div>    

                <div id="modal" class="modal">
                    <div class="modal-container">
                        <img id="modal-content"/>
                    </div>
                </div>

                <PhotoModal
                    src={modalSrc}
                    showImgModal={showImgModal}
                    setShowImgModal={setShowImgModal}
                />
            </div>
            :
            null
        }
        </div>
    )
}

export default Images