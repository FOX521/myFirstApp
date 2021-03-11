import React from 'react';
import Profile from './Profile';
import { createAddPost, createChangeInput, setUserProfileAC } from '../data/reducerPostPage'
import { connect } from 'react-redux';
import axios from 'axios'
import { withRouter } from 'react-router';

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

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userid
    if (!userID) {
      userID = 2
    }
    debugger
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        .then(response => {
            this.props.setUserProfile(response.data);            
        })
  }

  render() {
    return (
      <Profile profilePage={this.props.profilePage}
      createPost={this.props.createPost}
      changeInputValue={this.props.changeInputValue}
      setUserProfile={this.props.setUserProfile} />
    )
  }
}

let mapToStateProps = (state) => {
  debugger
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
    },
    setUserProfile: (data) => {
      dispatch(setUserProfileAC(data))
    }
  }
}

let withURLDataContainerComponent = withRouter(ProfileContainerAPI)

let ProfileContainer = connect(mapToStateProps, mapToDispatchProps)(withURLDataContainerComponent)

export default ProfileContainer;