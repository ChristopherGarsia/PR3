import React, {useEffect, useState} from 'react'

function Email(props) {
    const [active, setActive] = useState(false)
    const [email, setEmail] = useState('')

    function handleChange(event) {
        setEmail(event.target.value)
    }

    useEffect(() => {
        props.id === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])

    function validateEmail(event) {
        let checks = 0;
        if (email.includes('.edu', email.length - 4)) {
            checks = checks + 1;
        }
        else if (email.includes('.com', email.length - 4)) {
            checks = checks + 1;
        }

        if (email.includes('@')) {
            checks = checks + 1;
        }

        if (checks == 2) {
            document.getElementById('responseMessage').innerHTML="Email successfully recorded";
        }

        if (checks != 2) {
            document.getElementById('responseMessage').innerHTML="Invalid email address";
        }

        event.preventDefault();
    }

    return(
        <div>
            {active 
                ?
                <div id="Text" class = "text">
                    <form onSubmit={(event) => validateEmail(event)}>
                        <br/>
                        <label for="email">Email:</label>
                        <br/>
                        <input type="text" value={email} onChange={(event) => handleChange(event)}/>
                        <br/>
                        <span id="responseMessage"></span>
                        <br/>
                        <br/>
                        <input type="submit" value="Test Email"/>
                    </form>
                </div>
                :
                null
            }
        </div>
    )
}

export default Email