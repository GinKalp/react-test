import {useHistory} from "react-router-dom";

function AboutUs(){
    const history = useHistory()
    return (
        <div>
            <h1>About Us</h1>
            <button onClick={() => history.goBack()}>Go back</button>
        </div>
    )
}

export default AboutUs