import React from 'react';
import Profile from './Profile';
import {createAddPost,createChangeInput} from '../data/reducerPostPage'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }
    render () {
      let createPost = (text) => {
        this.props.store.dispatch(createAddPost(text)); 
      };
      
      let changeInputValue = (text) => {  
        this.props.store.dispatch(createChangeInput(text));
      }

        return (
          <Profile profilePage={this.props.store.getState().profilePage} createPost={createPost} changeInputValue={changeInputValue}/>
        )
    }
}

export default ProfileContainer;