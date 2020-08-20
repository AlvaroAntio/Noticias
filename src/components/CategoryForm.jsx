import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Category from './Category'

class CategoryForm extends Component{
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Field name="name" component="input" placeholder="nombre de categoria" />
            </form>
        )
    }
}
export default reduxForm({
    form: 'category',
})(CategoryForm)