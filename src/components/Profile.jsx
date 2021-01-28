import React from 'react';
import Posts from './Posts';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
    render () {

      let postsElements = this.props.profilePage.posts.map( el => <Posts posts={el.posts} like={el.like} />)

        return (
          <div className='content'>
            <div>
              <img src='#'></img>
            </div>
            <div>
              ava + desc
            </div>
            <div className='posts'>
              <h3 className='posts-title'>
                MY POSTS
              </h3>
              <textarea className='post-textarea'></textarea>
              <button className='post-add__button-posts'>
                Add Posts
              </button>
             {postsElements}
           </div>
        </div>
        )
    }
}

export default Profile;