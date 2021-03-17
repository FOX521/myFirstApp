import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { unFollowUsers, followUsers } from '../API/api';

const USER_PHOTO = 'data:image/jpeg;base64,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';


let UsersPage = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    return (
        <div>
            <div>
                {pages.map((page) => <span className={props.currentPage === page && 'styleChoise'}
                    onClick={() => { props.onPageChange(page) }}>{page}</span>)}
            </div>
            {props.users.map((u) => <div key={u.id} >
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : USER_PHOTO} alt="" />
                        </NavLink>
                    </div>
                    {u.followed
                        ? <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                            props.toggleDisabled(true, u.id)
                            unFollowUsers(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unFollow(u.id)
                                }
                                props.toggleDisabled(false, u.id)
                            });
                        }}>Unfollow</button>
                        : <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                            props.toggleDisabled(true, u.id)
                            followUsers(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.toggleDisabled(false, u.id) 
                            });
                        }}>follow</button>}
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default UsersPage