import React from "react";

export default ({item}) => {
    return (
        <div>
            Выбран пользователь <b>{item.firstName + '' + item.lastName}</b>
            Описание:
            <textarea defaultValue={item.description} />
            Адрес проживания: <b>{item.address.streetAddress}</b>
            Город: <b>{item.address.city}</b>
            Провинция/штат: <b>{item.address.state}</b>
            Индекс: <b>{item.address.zip}</b>
        </div>
    )
}