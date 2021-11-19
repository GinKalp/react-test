import css from './Button.module.css'

function Button({text, btnClass}){
    return (
        <button className={`${css.btn} ${css[btnClass]}`}>{text}</button>
    )
}

export default Button