// https:// developer.spotify.com/ 
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "56b3e49db34e44d6b5d0ff7aa27d04bd";

const scopes = [
    "user-read-currently-playing" , 
    "user-read-recently-played" ,
    "user-read-playback-state" ,
    "user-read-playback-position",
    "user-read-private",
    "user-top-read" ,
    "user-library-modify",
    "user-library-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",



];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;