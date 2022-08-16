function getAuthUser() {
    const user = JSON.parse(localStorage.getItem('libromarko'));
    return user;
  }
  
  function authHeader() {
    const user = getAuthUser();
    if (user && user.access_token) {
      return { 'Authorization': user.access_token };
    } else {
      return {};
    }
  }
  
  export { authHeader, getAuthUser };
  