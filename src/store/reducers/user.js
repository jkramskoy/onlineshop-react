export default function user(state = {}, action = {}) {
    switch (action.type) {
      case 'USER_LOGGED_IN':
        return action.user.data.token;
      case 'USER_LOGGED_OUT':
        return {};
      default:
        return state;
    }
  }


  // user.UserName == "johndoe" && user.Password == "def@123"