import React, {Component} from 'react'
import {connect} from 'react-redux';
import {createPost, hideAlert, showAlert} from '../redux/actions';
import Alert from './Alert';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const {title} = this.state

        if(!title.trim()) {

            return this.props.showAlert('Поле должно быть заполнено', 3000)
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({title: ''})
    }
    changeInputHandler = e => {
        e.persist()
        if (this.props.alert !== null) {
            this.props.hideAlert()
        }
        this.setState(prev => ({
            ...prev, ...{
                [e.target.name]: e.target.value
            }
        }))
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}
                    />
                    {this.props.alert && <Alert text={this.props.alert}/>}
                </div>
                <button className="btn btn-success mt-2" type='submit'>Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert, hideAlert
}
const mapStateToProps = state => {
    return {
        alert: state.app.alert
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)