export const userSelector = (state) => state.user;
export const authStateSelector = (state) => ({
  user: state.user,
  status: state.status,
  error: state.error,
  login: state.login
});
