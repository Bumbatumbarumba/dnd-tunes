export class SessionStorageService {
  private static storageKey: string =
    process.env.REACT_APP_SESSION_STORAGE_KEY_PREFIX + "username";

  static saveUserName(username: string) {
    sessionStorage.setItem(this.storageKey, username);
  }

  static getUserName() {
    sessionStorage.getItem(this.storageKey);
  }

  static deleteUsername() {
    sessionStorage.removeItem(this.storageKey);
  }
}
