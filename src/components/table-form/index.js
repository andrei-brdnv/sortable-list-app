import React, {Component} from "react";
import "./style.css"
import {connect} from "react-redux";
import { addTableRow } from "../../redux/ac";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        borderRadius: 0,
        margin: '10px auto',
        color: '#ffffff',
        backgroundColor: '#43a047'
    }
});

class TableForm extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    render() {
        const { classes } = this.props
        console.log('render TableForm')
        return (
            <form className="form-container">
                <div>
                    <input
                        className={this.getClassName('id')}
                        value={this.state.id}
                        onChange={this.handleChange('id')}
                        placeholder="id..."
                    />
                </div>
                <div>
                    <input
                        className={this.getClassName('firstName')}
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                        placeholder="first name..."
                    />
                </div>
                <div>
                    <input
                        className={this.getClassName('lastName')}
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        placeholder="last name..."
                    />
                </div>
                <div>
                    <input
                        className={this.getClassName('email')}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        placeholder="email..."
                    />
                </div>
                <div>
                    <input
                        className={this.getClassName('phone')}
                        value={this.state.phone}
                        onChange={this.handleChange('phone')}
                        placeholder="phone..."
                    />
                </div>
                <div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        disabled={!this.isValidForm()}
                        onClick={this.handleSubmit}
                    >
                        Добавить
                    </Button>
                </div>
            </form>
        )
    }

    isValidForm = () => ['id', 'firstName', 'lastName', 'email', 'phone'].every(this.isValidField)

    isValidField = (type) => this.state[type].length >= limits[type].min

    getClassName = (type) => (this.isValidField(type) ? 'input-form' : 'input-form__error')

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTableRow(this.state)
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        })
    }

    handleChange = (type) => (event) => {
        const {value} = event.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    id: {
        min: 3,
        max: 20
    },
    firstName: {
        min: 3,
        max: 20
    },
    lastName: {
        min: 3,
        max: 20
    },
    email: {
        min: 3,
        max: 50
    },
    phone: {
        min: 3,
        max: 20
    }
}

export default connect(
    null,
    (dispatch) => ({
        addTableRow: (newRow) => dispatch(addTableRow(newRow))
    })
)(withStyles(styles)(TableForm))

