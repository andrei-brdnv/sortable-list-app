import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import "./style.css"

const useStyles = makeStyles({
    root: {
        marginBottom: '10px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px'
    },
});

export default (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button className={classes.root} onClick={props.onSelectSmall} variant="contained" color="default">
                Загрузить маленький объем данных (32 элемента)
            </Button>
            <Button onClick={props.onSelectBig} variant="contained" color="primary">
                Загрузить большой объем данных (1000 элементов)
            </Button>
        </div>
    )
}