import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from './../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    }
    
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if(!this.state.isOpen) {
            return null;
        }
        const {article } = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}></CommentList>
            </section>
        )
    }
}

export default toggleOpen(Article);