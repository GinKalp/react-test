import Button from "./Button";
import css from './Twitter.module.css'

function Twitter(){
    return (
        <div className={css.container}>
            <i className={`fa fa-twitter ${css.icon}`} aria-hidden="true"/>
            <h1>Happening now</h1>
            <h2>Join Twitter today.</h2>
            <Button text={'Sign up'} btnClass={'btn-blue'}/><br/>
            <Button text={'Log in'} btnClass={'btn-white'}/>
        </div>
    )
}

export default Twitter