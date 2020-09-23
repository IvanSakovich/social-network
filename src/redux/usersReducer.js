const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'SET_USERS';

let initialState = {
  users : [ /*
    {id: 1, photoUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', 
    followed: false, fullName: 'Ivan', status: 'titan', location: 'Minsk'},
    {id: 1, photoUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', 
    followed: true, fullName: 'Alex', status: 'bubnovs', location: 'Brest'},
    {id: 1, photoUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', 
    followed: false, fullName: 'Yury', status: 'boss', location: 'Minsk'},
    {id: 1, photoUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', 
    followed: true, fullName: 'Dima', status: 'boss', location: 'Minsk'}
  */ ] 
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {
    case FOLLOW:   
    return {...state, //поменять обьект
       users: state.users.map ( u => {
         if (u.id === action.usersId) {
           return {...u, followed: true}
         }
         return u;
       })
      }
    case UNFOLLOW:
      return {
      ...state, //поменять обьект
      users: state.users.map ( u => {
        if (u.id === action.usersId) {
          return {...u, followed: false}
        }
        return u;
      })
     }
    case SET_USERS: {
      return {...state, users:[...state.users, ...action.users]}
    }

    default: 
    return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;