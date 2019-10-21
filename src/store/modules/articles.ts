import { Module, VuexModule, getModule, Mutation, Action } from "vuex-module-decorators";

import { Articles } from '../models'
import * as  api  from '../api';
type FeedType ='global' | 'user';
import store from '@/store'
@Module({
    dynamic: true,
    namespaced: true,
    name: 'articles',
    store
})


class ArticlesModule extends VuexModule {
    globalFeed: Articles[] = []
    userFeed: Articles[] = []

    @Mutation
    setGlobalFeed(articles: Articles[]) {
        this.globalFeed = articles
    }

    @Action({ commit: 'setGlobalFeed' })
    async refreshGlobalFeed( feedtype : FeedType )
    {
        
        const globalFeed = await api.getGlobalFeed()
        return { articles: globalFeed.articles }
    }

}

export default getModule(ArticlesModule);