import Users from './Users'
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from './../../redux/usersReducer';

let mapStateToProps = (state) => {console.log(state)
    return {
        users: state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch) => { 
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);