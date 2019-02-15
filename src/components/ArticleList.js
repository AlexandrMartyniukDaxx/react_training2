import React from 'react';
import Article from './Article';
import toggleOpen from '../decorators/toggleOpen';

const ArticleList = ({ articles, isOpen, toggleOpenClick }) => {
    if (!articles || !articles.length) {
        return null;
    }
    const articleELements = isOpen ?
        articles.map(article => <li key={article.id}><Article article={article} /></li>)
        : null;

    return (
        <section>
            <button onClick={toggleOpenClick}>{isOpen ? 'hide articles' : 'show articles'}</button>
            <ul>
                {articleELements}
            </ul>
        </section>
    );
}

export default toggleOpen(ArticleList);