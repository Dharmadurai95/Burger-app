import React, { Component } from 'react';
import Aux from '../aux';
import Modal from '../../conponent/ui/modal/modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = ({
            error: null
        })
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(null, error => {
                this.setState({ error: error })
            })
            this.resInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }
        errorConformedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (<Aux>
                <Modal
                    show={this.state.error}
                    clicked={this.errorConformedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>);
        }
    }
}
export default withErrorHandler;