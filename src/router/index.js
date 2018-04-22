import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/album/Album';
import Artist from '@/components/artist/Artist';
import Playlist from '@/components/playlist/Playlist';
import SignUp from '@/components/SignUp';
import Login from '@/components/Login';
import Search from '@/components/search/Search';
import User from '@/components/User';
import Parameter from '@/components/Parameter';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist/:artistId',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album/:collectionId',
      name: 'Album',
      component: Album
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    },
    {
      path: '/parameter',
      name: 'Parameter',
      component: Parameter
    }
  ],
});
