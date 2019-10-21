<template>
      <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">Nagarro</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <li v-if="username" class="nav-item">
           <router-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
           </router-link>
          </li>
          <li v-if="username" class="nav-item">
            <router-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
           <li v-if="!username" class="nav-item">
              <router-link to="/login" class="nav-link">
              Sign in
              </router-link>
          </li>
          <li v-if="!username" class="nav-item">
              <router-link to="/register" class="nav-link">
              Sign up
              </router-link>
          </li>
          <li v-if="username" class="nav-item">
              <router-link :to ="`/@${username}`" class="nav-link">
              {{ username }}
              </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";
import users from '@/store/modules/users';

@Component
export default class AppHeader extends Vue
{
    get username()
    {
        return users.username
    }
}
</script>


