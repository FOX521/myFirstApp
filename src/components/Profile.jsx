import React from 'react';
import Posts from './Posts';
import { createAddPost, createChangeInput } from '../data/reducerPostPage'
import Preloader from './Preloader';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let postTitleStyle = {
      display: 'block',
      width: '200px',
      marginLeft: '20px',
      fontFamily: 'sans-serif',
      color: 'white',
      fontSize: '30px'
    }

    let textareaStyle = {
      width: '80%',
      minHeight: '90px',
      height: 'auto',
      display: 'block',
      marginLeft: '20px',
    }

    let bottomStylePost = {
      display: 'block',
      width: '90px',
      height: '30px',
      marginTop: '20px',
      marginLeft: '20px',
      borderRadius: '20px',
      fontFamily: 'sans-serif',
      fontSize: '15px',
      backgroundColor: 'white'
    }

    let postsElements = this.props.profilePage.posts.map(el => <Posts post={el.post} like={el.like} key={el.id + '1'.toString()}/>);
    let newPost = React.createRef();

    let getPost = () => {
      let text = newPost.current.value;
      this.props.createPost(text);
    };

    let changeInput = () => {
      let text = newPost.current.value;
      this.props.changeInputValue(text);
    }
    if(!this.props.profilePage.profile) {
      return <Preloader/>
    }

    return (
      <div className='content'>
        <div>
          <img src='https://russiantouramerica.com/wp-content/uploads/2018/08/Nju-Jork-foto-free-1000x700.jpg' width='100%' height='100%'></img>
        </div>
        <div>
          <img src={this.props.profilePage.profile.photos.large}/>
        </div>
        <div className='posts'>
          <h3 style={postTitleStyle} className='posts-title'>
            MY POSTS
              </h3>
          <textarea
            value={this.props.profilePage.newPostText}
            ref={newPost}
            onChange={changeInput}
            style={textareaStyle}
            className='post-textarea'>
          </textarea>
          <button style={bottomStylePost} onClick={getPost} className='post-add__button-posts'>
            Add Posts
              </button>
          {postsElements}
        </div>
      </div>
    )
  }
}

export default Profile;