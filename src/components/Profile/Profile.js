import React from 'react';
import './Profile.css';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation.js';



function Profile(props) {

    const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
    const currentUser = React.useContext(CurrentUserContext);
    const { name, email } = values;

    React.useEffect(() => {
        if (currentUser) {
            setValues({ name: currentUser.name, email: currentUser.email });
        }
    }, [currentUser]);

    function handleSubmitForm(e) {
        e.preventDefault();
        props.onEditUserProfile({ name, email });
    }

    return (

        <section className="profile">
            <div className="profile__container">
                <h2 className="profile__title">{`Привет, ${currentUser.name}`}!</h2>
                <form onSubmit={handleSubmitForm} name="profile" action="#" method="POST" className="profile__form" noValidate>
                    <div className="profile__input-container">
                        <label for="profile-name-input" className="profile__label">Имя</label>
                        <input
                            type="text"
                            className="profile__input profile__input_type_name"
                            name="name"
                            id="name-input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Введите имя"
                            defaultValue={currentUser.name}
                            required
                            onChange={handleChange}
                        />

                    </div>
                    <span className="profile__input-error">{errors.name}</span>
                    <div className="profile__divider"></div>
                    <div className="profile__input-container">
                        <label for="email-input" className="profile__label">Email</label>
                        <input
                            type="email"
                            className="profile__input profile__input_type_email"
                            name="email"
                            id="profile-email-input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Введите email"
                            defaultValue={currentUser.email}
                            required 
                            onChange={handleChange} />
                    </div>
                    <span className="profile__input-error">{errors.email}</span>

                    <button type="submit" className={`${isValid ? 'profile__button' : 'profile__button profile__button_disabled'}`} disabled={!isValid}>Редактировать</button>
                </form>

                <NavLink className="profile__logout" activeClassName="profile__lougout_active" to="/signin" onClick={props.onLogout}>Выйти из аккаунта</NavLink>
            </div>
        </section>
    )
}

export default Profile;