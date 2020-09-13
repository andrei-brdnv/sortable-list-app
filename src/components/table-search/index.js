import React, {useState} from "react";
import "./style.css"

//Material UI
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: '#ffa726'
    }
});

export default props => {
    const classes = useStyles()
    const [value, setValue] = useState('')

    const handleChange = event => {
        console.log(value)
        setValue(event.target.value)
    }

    return (
        <div className="search-container">
            <Button className={classes.button} variant="contained" onClick={() => props.handleSearch(value)}>
                Найти
            </Button>
            <input
                className="input-search"
                type="text"
                onChange={handleChange}
                value={value}
                placeholder="Поиск..."
            />
        </div>
    )
}