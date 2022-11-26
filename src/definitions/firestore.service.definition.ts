export enum MusicSource {
    youtube = "youtube",
    spotify = "spotify",
}

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
    source: MusicSource;
}

export interface Username {
    docId: string;
    userId: string;
    userTag?: string;
    username: string;
}
