import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            this.setState({ text: '' })
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleBlur = e => {
        this.props.onSave(e.target.value)
    }

    render() {
        return (
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder={this.props.placeholder}
                       autoFocus={true}
                       value={this.state.text}
                       onBlur={this.handleBlur}
                       onChange={this.handleChange}
                       onKeyDown={this.handleSubmit} />
            </div>
        )
    }
}
