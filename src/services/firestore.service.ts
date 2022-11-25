import {
    collection,
    doc,
    getDocs,
    addDoc,
    setDoc,
    deleteDoc,
    query,
    where,
} from "@firebase/firestore";
import {
    ApiMessage,
    ApiResponse,
    ErrorResponse,
    SuccessResponse,
    Tag,
    Username,
} from "../definitions";
import { firestore } from "./firebase.service";
import { isNullOrEmpty } from "./helper.service";
import { SessionStorageService } from "./sessionStorage.service";

export class FirestoreService {
    static usernamesCollectionRef = collection(firestore, "usernames");
    static tagsCollectionRef = collection(firestore, "tags");
    static songsCollectionRef = collection(firestore, "songs");

    //#region usernames
    /**
     * if it doesn't exist, a new record is added; else the existing one is updated
     * @param userId string for user id
     * @param username intended username to associate with user
     */
    static async setUsername(
        userId: string,
        username: string
    ): Promise<ApiResponse> {
        const usernameData = await this.getUsername(userId);
        try {
            if (usernameData.success) {
                if (isNullOrEmpty(usernameData.data)) {
                    await addDoc(this.usernamesCollectionRef, {
                        userId,
                        username,
                    });
                    return new SuccessResponse();
                }
                const userDoc = doc(
                    firestore,
                    "usernames",
                    usernameData?.data?.docId || ""
                );
                const newFields = {
                    userId: usernameData.data?.userId!,
                    username,
                };
                await setDoc(userDoc, newFields);
                SessionStorageService.saveUserName(username);
                return new SuccessResponse();
            }
            return new ErrorResponse(ApiMessage.Failure);
        } catch {
            return new ErrorResponse(ApiMessage.Failure);
        }
    }

    static async getUsername(userId: string): Promise<ApiResponse<Username>> {
        try {
            const searchByIdQuery = query(
                collection(firestore, "usernames"),
                where("userId", "==", userId)
            );
            const result = await getDocs(searchByIdQuery);
            if (result.empty) {
                return new SuccessResponse({} as Username);
            }
            const userData: Username = {
                ...result.docs[0].data(),
                docId: result.docs[0].id,
            } as Username;
            return new SuccessResponse(userData);
        } catch {
            return new ErrorResponse(ApiMessage.Failure);
        }
    }

    static async deleteUsername(userId: string) {}
    // #endregion

    // #region tags
    static async addTag(userId: string, tagName: string) {}

    static async getTags(userId: string) {}

    static async updateTag(userId: string, tagId: string, tagName: string) {}

    static async deleteTag(userId: string, tagId: string) {}
    // #endregion

    // #region songs
    static async addSong(userId: string, songName: string) {}

    static async getSongs(userId: string) {}

    static async updateSong(
        userId: string,
        songId: string,
        songName?: string,
        tags?: Tag[]
    ) {}

    static async deleteSong(userId: string, songId: string) {}
    // #endregion
}
