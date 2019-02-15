import React, { Component } from 'react';

export default (OriginalComponent) => class WrapperComponent extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenClick={this.toggleOpen} />
    }
}