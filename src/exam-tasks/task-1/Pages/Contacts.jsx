import {useHistory} from "react-router-dom";

function Contacts(){
    const history = useHistory()
    return (
        <div className={'container'}>
            <h1>Contacts</h1>
            <button onClick={() => history.goBack()}>Go back</button>
        </div>

    )
}

export default Contacts