import React, {useState} from "react";

export default props => {
    const [value, setValue] = useState('')

    const handleChange = event => {
        console.log(value)
        setValue(event.target.value)
    }

    return (
        <div>
            <button onClick={() => props.handleSearch(value)}>Найти</button>
            <input type="text" onChange={handleChange} value={value}>

            </input>
        </div>
    )
}