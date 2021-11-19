import apparel from './img/apparel.jpg'
import calendars from './img/calendars.jpg'
import cups from './img/cups.jpg'
import posters from './img/posters.jpg'
import stickers from './img/stickers.jpg'
import css from './Categories.module.css'

function Categories() {
    return (
        <div>
            <h1 className={css.title}>CATEGORIES</h1>
            <div className={css['flex-container']}>
                <div>
                    <img src={posters} alt=""/>
                    <h2>POSTERS</h2>
                </div>
                <div>
                    <img src={apparel} alt=""/>
                    <h2>APPAREL</h2>
                </div>
                <div>
                    <img src={stickers} alt=""/>
                    <h2>STICKERS</h2>
                </div>
                <div>
                    <img src={cups} alt=""/>
                    <h2>CUPS</h2>
                </div>
                <div>
                    <img src={calendars} alt=""/>
                    <h2>CALENDARS</h2>
                </div>
            </div>
        </div>
    )
}

export default Categories