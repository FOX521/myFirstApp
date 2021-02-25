import React from 'react';
import Profile from './Profile';
import { createAddPost, createChangeInput } from '../data/reducerPostPage'
import { connect } from 'react-redux';

// class ProfileContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let createPost = (text) => {
//       this.props.store.dispatch(createAddPost(text));
//     };

//     let changeInputValue = (text) => {
//       this.props.store.dispatch(createChangeInput(text));
//     }

//     return (
//       <Profile profilePage={this.props.store.getState().profilePage} createPost={createPost} changeInputValue={changeInputValue} />
//     )
//   }
// }

let mapToStateProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapToDispatchProps = (dispatch) => {
  return {
    createPost: (text) => {
      dispatch(createAddPost(text));
    },
    changeInputValue: (text) => {
      dispatch(createChangeInput(text));
    }
  }
}


let ProfileContainer = connect(mapToStateProps, mapToDispatchProps)(Profile)

export default ProfileContainer;