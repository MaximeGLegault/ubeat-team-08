import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/album/Album';
import Artist from '@/components//artist/Artist';
import Playlist from '@/components/Playlist';
import Search from '@/components/Search';

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
      path: '/search?q=:searchTerm',
      name: 'Search',
      component: Search
    }
  ],
});
