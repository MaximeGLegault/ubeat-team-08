import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/album/Album';
import Artist from '@/components/artist/Artist';
import Playlist from '@/components/Playlist';
import SignUp from '@/components/SignUp';
import Login from '@/components/Login';
import Search from '@/components/search/Search';

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
    }
  ],
});
