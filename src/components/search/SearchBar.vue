<template>
  <div class="searchBar">
    <div class="form">
      <input autocomplete="off" @keyup.enter.prevent="goSearch" @keypress="searcher" v-model="search" id="search" type="text" list="autolist" placeholder="Search...">
      <div c
        url="https://ubeat.herokuapp.com/search"
        anchor="trackName"
        label="writer"
        :on-select="getData">
      </div>
      <a @click="goSearch"><i class="material-icons">search</i></a>
    </div>
    {{autocomplete}}
  </div>
</template>

<script>
  import api from '@/lib/api';
  import Autocomplete from 'vue2-autocomplete-js';

  export default {
    name: 'SearchBar',
    component: { Autocomplete },
    data() {
      return {
        search: '',
        autocomplete: []
      };
    },
    methods: {
      goSearch() {
        this.$router.replace({ name: 'Search', query: { q: this.search }
        });
        this.$emit('update', this.search);
      },
      async searcher() {
        if (this.search.length > 3) {
          this.autocomplete = [];
          const rx = new RegExp(this.search, 'i');
          await api.getSearch(this.search)
            .then((value) => {
              value.results.forEach((element) => {
                if (element.wrapperType === 'track' && rx.test(element.trackName)) {
                  const rx2 = new RegExp(element.trackName, 'j');
                  this.autocomplete.forEach((word) => {
                    if (rx2.test(word)) {
                      this.autocomplete.push(element.trackName);
                    }
                  });
                }
                if (element.wrapperType === 'collection' && rx.test(element.collectionName)) {
                  const rx2 = new RegExp(element.collectionName, 'j');
                  this.autocomplete.forEach((word) => {
                    if (rx2.test(word)) {
                      this.autocomplete.push(element.collectionName);
                    }
                  });
                }
                if (element.wrapperType === 'artist' && rx.test(element.artistName)) {
                  const rx2 = new RegExp(element.artistName, 'j');
                  this.autocomplete.forEach((word) => {
                    if (rx2.test(word)) {
                      this.autocomplete.push(element.artistName);
                    }
                  });
                }
                // this.getElementById('autolist').innerHTML = this.autocomplete;
              });
            });
        }
      }
    }
  };
</script>

<style scoped>
  a:hover{

    color: #651fff;
  }
  a{

    color: white;
    cursor: pointer;
  }
  .form{
    width: 35%;
  }
</style>
