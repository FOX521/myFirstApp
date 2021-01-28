import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
    render () {
        return (
          <div className='content'>
            <div>
              <img src='#'></img>
            </div>
            <div>
              ava + desc
            </div>
            <div>
              myposts
              <div>
                new post
              </div>
              <div>
                <div>
                  post1
                </div>
                <div>
                  post 2
                </div>
              </div>
            </div>
        </div>
        )
    }
}

export default Profile;