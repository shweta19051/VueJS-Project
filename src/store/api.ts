import axios from 'axios';
import { UserSubmit, UserResponse, User, ArticlesResponse, Profile, ProfileResponse, UserForUpdate } from './models';

export const api = axios.create({
    baseURL: "https://conduit.productionready.io/api"
});

export function setJWT(jwt: string) {
    api.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearToken() {
    delete api.defaults.headers.common["Authorization"];
}

export async function loginUser(user: UserSubmit): Promise<User> 
{
    const response = await axios.post('/users/login', {
        user
    });
    return (response.data as UserResponse).user;
}

export async function getGlobalFeed()
{
    const response= await api.get('/articles');
    return response.data as ArticlesResponse;
}

export async function fetchProfile(username : string) : Promise<Profile>
{
    const response = await api.get(`/profiles/${username}`);
    return (response.data as ProfileResponse).profile
}

export async function updateUser(user: UserForUpdate)
{
    const response= await api.put('/user',user);
    return response.data as User

}