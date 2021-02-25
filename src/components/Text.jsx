import React, {useEffect, useState} from 'react'

function Text(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    return (
        <div>
            {active 
                ? 
                <div id="Text" className="text">
                    <form>
                        <br/>
                        <label for="fname">First name:</label>
                        <br/>
                        <input type="text" id="fname" name="fname"/>
                        <br/>
                        <label for="lname">Last name:</label>
                        <br/>
                        <input type="text" id="lname" name="lname"/>
                        <br/><br/>
                        <h4>Favorite Movie</h4>
                        <input type="radio" id="Avengers" name="movie" value="Avengers"/>
                        <label for="Avengers">Avengers</label><br/>
                        <input type="radio" id="DarkKnight" name="movie" value="DarkKnight"/>
                        <label for="DarkKnight">Dark Knight</label><br/>
                        <input type="radio" id="Tenet" name="movie" value="Tenet"/>
                        <label for="Tenet">Tenet</label><br/><br/>
                        <input type="submit" value="Done"/>
                    </form>
                </div>
                : 
                null
            }
        </div>
    )
}

export default Text