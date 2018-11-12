export const SET_AUTH_USER = "SET_AUTH_USER";
export const UN_SET_AUTH_USER = "UN_SET_AUTH_USER";

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}

export function unSetAuthUser() {
  return {
    type: UN_SET_AUTH_USER
  };
}
