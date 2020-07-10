declare interface ITwitterService {
    searchTweets(q: string, count: number): Promise<ITweetBody[]>;
    getStream(track: string, language: string): Promise<any>;
}
