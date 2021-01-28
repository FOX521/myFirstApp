import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {        
        return(
            <div className='post__item'>
                <img className='post__img' src='https://ozarnik.ru/uploads/posts/2020-10/1603513082_neonovyj-igrok.jpg' width='40px' height='40px' alt='Avatar user'></img>
                <p className='post__text' >{this.props.posts}</p>
                <button className='post__add-button'>{this.props.like}</button>
            </div>
        )
    }
};

export default Posts;