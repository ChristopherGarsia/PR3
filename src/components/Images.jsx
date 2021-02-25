import React, {useEffect, useState} from 'react'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.JPG'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'

function Images(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return (
        <div>
        {active? 
            <div>
                <button class="button" onclick="topFunction()" id="topButton" title="Go to top">Top</button>

                <div id="media" class = "media">
                    <img src={one}/>
                    <img src={two}/>
                    <img src={three}/>
                    <img src={four}/>
                    <img src={five}/>
                    <img src={six}/>
                    <img src={seven}/>
                    <img src={eight}/>
                </div>    

                <div id="modal" class="modal">
                    <div class="modal-container">
                        <img id="modal-content"/>
                    </div>
                </div>
            </div>
            :
            null
        }
        </div>
    )
}

export default Images