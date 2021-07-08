import './Logo.css';
import logo from '../../images/logo.svg';

function Logo(props) {
    return (
        <img src={logo} alt="логотип" className={`logo logo_type_${props.name}`} />
    )
}

export default Logo;