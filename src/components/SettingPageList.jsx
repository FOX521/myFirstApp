import React from 'react';

class SettingPageList extends React.Component {
    render() {

        return (
            <ul className='setting-page__list'>
                <li>
                    <label>
                        Уведомления и звук <input type='checkbox'></input> ON.
                    </label>
                </li>
                <li>
                    Черный список
                </li>
                <li>
                    Язык
                </li>
                <li>
                    Настройки профиля
                </li>
                <li>
                    Приватность
                </li>
                <li>
                    Безопасность
                </li>
            </ul>
        )
    }
};

export default SettingPageList