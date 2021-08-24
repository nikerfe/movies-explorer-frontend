import "./InfoTooltip.css";
import successLogo from '../../images/successLogo.svg';
import failLogo from '../../images/failLogo.svg';



function InfoTooltip(props) {
    const logo = props.isSucceed ? successLogo : failLogo
    const title = props.isSucceed ? "Вы успешно зарегистрировались!" : `${props.errorMessage}`
    return (
        
        <section className={`popup popup_type_info ${props.isOpen ? 'popup_opened' : 'hidden'}`}>
        <div className="popup__container">
            <button type="button" aria-label="закрыть" className="popup__close-button" onClick={props.onClose}></button>
            <div className = "popup__info-container">
            <img src={logo} className="popup__info-logo" alt={`Изображение ${props.isSucceed ? "Успех" : "Неудача"}`}/>
            <h2 className="popup__title popup__title_type_info">{title}</h2>
            </div>
        </div>

    </section>
    )
}

export default InfoTooltip;