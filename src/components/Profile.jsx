import React from 'react';
import Posts from './Posts';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
    render () {

      let postsElements = this.props.profilePage.posts.map( el => <Posts post={el.post} like={el.like} />);
      let newPost = React.createRef();

      let getPost = () => {
        let text = newPost.current.value;
        this.props.addPost(text);
      };

        return (
          <div className='content'>
            <div>
              <img src='https://russiantouramerica.com/wp-content/uploads/2018/08/Nju-Jork-foto-free-1000x700.jpg' width='100%' height='100%'></img>
            </div>
            <div>
            </div>
            <div className='posts'>
              <h3 className='posts-title'>
                MY POSTS
              </h3>
              <textarea ref={newPost} className='post-textarea'></textarea>
              <button onClick={getPost} className='post-add__button-posts'>
                Add Posts
              </button>
             {postsElements}
           </div>
        </div>
        )
    }
}

export default Profile;