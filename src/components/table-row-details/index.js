import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        maxWidth: '500px',
        margin: '0 auto 50px auto',
        padding: '20px 20px 15px 20px',
        '& div': {
            marginBottom: '5px'
        }
    }
});

export default ({item}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.container} elevation={6}>
            <div>Выбран пользователь <b>{item.firstName + ' ' + item.lastName}</b></div>
            <div>Описание: <br/><textarea defaultValue={item.description}/></div>
            <div>Адрес проживания: <b>{item.address.streetAddress}</b></div>
            <div>Город: <b>{item.address.city}</b></div>
            <div>Провинция/штат: <b>{item.address.state}</b></div>
            <div>Индекс: <b>{item.address.zip}</b></div>
        </Paper>
    )
}