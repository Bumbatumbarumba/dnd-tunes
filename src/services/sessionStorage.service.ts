export class SessionStorageService {
    private static storageKey: string =
        process.env.REACT_APP_SESSION_STORAGE_KEY_PREFIX + "username";

    static saveUserName(username: string) {
        sessionStorage.setItem(this.storageKey, username);
    }

    static getUserName(): string | null | undefined {
        // ss stores undefined and null as literal strings, so pulling an empty ss
        // value always gives a string >__>
        const value = sessionStorage.getItem(this.storageKey);
        return value === "undefined"
            ? undefined
            : value === "null"
            ? null
            : value;
    }

    static deleteUsername() {
        sessionStorage.removeItem(this.storageKey);
    }
}
