import React, {Component} from "react";
import {connect} from "react-redux";
import {addUserItem} from "../../redux/ac";

class TableForm extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    render() {
        console.log('render TableForm')
        return (
            <form onSubmit={this.handleSubmit}>
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
                        placeholder="firstName..."
                    />
                </div>
                <div>
                    <input
                        className={this.getClassName('lastName')}
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        placeholder="lastName..."
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
                    <button
                        disabled={!this.isValidForm()}
                    >
                        Add
                    </button>
                </div>
            </form>
        )
    }

    isValidForm = () => ['id', 'firstName', 'lastName', 'email', 'phone'].every(this.isValidField)

    isValidField = (type) => this.state[type].length >= limits[type].min

    getClassName = (type) => (this.isValidField(type) ? 'input' : 'input__error')

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUserItem(this.state)
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
        max: 25
    },
    firstName: {
        min: 3,
        max: 25
    },
    lastName: {
        min: 3,
        max: 25
    },
    email: {
        min: 3,
        max: 25
    },
    phone: {
        min: 3,
        max: 25
    }
}

export default connect(
    null,
    (dispatch) => ({
        addUserItem: (userItem) => dispatch(addUserItem(userItem))
    })
)(TableForm)

