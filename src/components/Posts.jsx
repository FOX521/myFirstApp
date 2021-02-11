import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {       
        let imgPostStyle = {
            display: 'inline-block',
            marginTop: '20px',
            marginLeft: '20px',
            borderRadius: '20px'
        } 

        let textPostStyle = {
            display: 'inline-block',
            marginLeft: '20px',
            color: 'white',
            fontSize: '22px'
        } 

        let postStyle = {
            display: 'block',
            marginTop: '20px',
            marginLeft: '20px',
            color: 'white',
            fontSize: '22px'
        } 

        let bottomStylePost = {
            display: 'block',
            width: '90px',
            height: '30px',
            marginLeft: '20px',
            borderRadius: '20px',
            fontFamily: 'sans-serif',
            fontSize: '15px',
            backgroundColor: 'white'
        }

        return(
            <div className='post__item'>
                <img style={imgPostStyle} className='post__img' src='data:image/jpeg;base64,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' width='40px' height='40px' alt='Avatar user'></img>
                <p style={textPostStyle}>User Name</p>
                <p style={postStyle} className='post__text' >{this.props.post}</p>
                <button style={bottomStylePost} className='post__add-button'>likes {this.props.like}</button>
            </div>
        )
    }
};

export default Posts;