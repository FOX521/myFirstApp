import axios from "axios";

const instanceGetUsers = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "520f50ac-b6b9-4b72-84f4-1bcc7c4afa28"
    }
});

const instanceFollowing = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        "API-KEY": "520f50ac-b6b9-4b72-84f4-1bcc7c4afa28"
    }
});

const instanceUnFollowing = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        "API-KEY": "520f50ac-b6b9-4b72-84f4-1bcc7c4afa28"
    }
});

const getUsers = (currentPage = 1, pageSize = 20) => {
    return instanceGetUsers.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
};

export const followUsers = (userId) => {
   return instanceFollowing.post(`${userId}`)
}

export const unFollowUsers = (userID) => {
   return instanceUnFollowing.delete(`${userID}`)
}

export default getUsers