const STORAGE_AUTH_TOKEN = 'AUTH_TOKEN'
const STORAGE_USER_NAME = 'USER_NAME'

export default {
  userAuth: {
    get: () => localStorage.getItem(STORAGE_AUTH_TOKEN) || '',
    save: token => localStorage.setItem(STORAGE_AUTH_TOKEN, token)
  },
  userName: {
    get: () => localStorage.getItem(STORAGE_AUTH_TOKEN) || '',
    save: userName => localStorage.setItem(STORAGE_USER_NAME, userName)
  }
}
