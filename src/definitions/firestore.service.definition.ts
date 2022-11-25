export interface Tag {
    docId: string;
    userId: string;
    tagName: string;
}

export interface Song {
    docId: string;
    userId: string;
    isPublic: boolean;
    songName: string;
    tags: string[];
    url: string;
}

export interface Username {
    docId: string;
    userId: string;
    userTag?: string;
    username: string;
}
