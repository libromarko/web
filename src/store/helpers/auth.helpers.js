function getAuthUser() {
    const user = JSON.parse(localStorage.getItem('libromarko'));
    return user;
  }
  
  function authHeader() {
    const user = getAuthUser();
    if (user && user.accessToken) {
      return { 'Authorization': user.accessToken };
    } else {
      return {};
    }
  }
  
  export { authHeader, getAuthUser };
  