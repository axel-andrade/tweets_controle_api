declare interface ITwitterService {
    searchTweets(q: string, count: number): Promise<any>;
    getStream(track: string, language: string): Promise<any>;
}
