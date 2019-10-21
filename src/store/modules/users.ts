import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store'
import { User, Profile, UserSubmit, UserForUpdate } from '../models';
import { loginUser, fetchProfile, updateUser, setJWT } from '../api';

@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true

})
class UsersModule extends VuexModule {
    user: User | null = null
    profile: Profile | null = null

    @Mutation
    setUser(user: User) { this.user = user }


    get username() {
        return this.user && this.user.username || null
    }

    @Mutation
    setProfile(profile: Profile) {
        this.profile = profile;
    }

    @Action({ commit: 'setUser' })
    async login(userSubmit: UserSubmit) {
            const user = await loginUser(userSubmit)
            setJWT(user.token);
            return user;

    }

    @Action({ commit: 'setProfile' })
    async loadProfile(username: string) {
        const profile = await fetchProfile(username)
        return profile;
    }

    @Mutation
    async updateProfile(userUpdateFields: UserForUpdate) {
        const user = await updateUser(userUpdateFields);
        return { user }
    }
}

export default getModule(UsersModule);