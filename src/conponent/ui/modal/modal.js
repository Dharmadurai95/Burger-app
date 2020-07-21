import React, { PureComponent } from 'react';
import './modal.css';
import Aux from '../../../hoc/aux';
import Backdrop from '../backdrop/backdrop';


class Modal extends PureComponent {
    shouldComponentUpdate(nextProps,nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
    };
    componentDidUpdate(){
        console.log('[Model] ')
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className='Modal'>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}
export default Modal;