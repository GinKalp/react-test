import {useState} from "react";

function Form(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [isLegal, setIsLegal] = useState(null)
    const [isValid, setIsValid] = useState(true)

    const handleForm = (e) =>{
        e.preventDefault()
        if(!name || !surname || !age) {
            return setIsValid(false)
        } else {
            setIsValid(true)
        }

        if (age >= 18) setIsLegal(true)
        if (age < 18) setIsLegal(false)
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder={'Enter name'}/><br/>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder={'Enter surname'}/><br/>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder={'Enter age'}/><br/>
                <button type={'submit'}>Submit</button>
            </form>
            {isLegal === true && <h3>Dėkojame, kad užsiregistravote</h3>}
            {isLegal === false && <h3>Deja, registracija negalima. Registruotis galima tik nuo 18 metų</h3>}
            {!isValid && <h3>Please enter all fields</h3>}
        </>

    )
}

export default Form