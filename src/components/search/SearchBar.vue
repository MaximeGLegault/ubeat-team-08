<template>
  <div class="searchBar">
    <div class="form">
      <input autocomplete="off" @keyup.enter.prevent="goSearch" @keypress="searcher" v-model="search" id="search" type="text" :placeholder="this.$route.query.q">
      <div><a @click="goSearch"><i class="material-icons">search</i></a></div>
    </div>
    <span><input type="radio" id="global" value="global" v-model="picked"><label for="global">All result</label>
      <input type="radio" id="albums" value="albums" v-model="picked"><label for="albums">Albums</label>
      <input type="radio" id="artists" value="artists" v-model="picked"><label for="artists">Artists</label>
      <input type="radio" id="tracks" value="tracks" v-model="picked"><label for="tracks">Tracks</label>
      <input type="radio" id="users" value="users" v-model="picked"><label for="users">Users</label></span>
    <select v-model="limit">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        search: '',
        picked: 'global',
        limit: '10',
        options: [
          { text: '10', value: '10' },
          { text: '20', value: '25' },
          { text: '30', value: '50' },
          { text: '40', value: '100' }
        ]
      };
    },
    methods: {
      goSearch() {
        this.$router.replace({ name: 'Search', query: { q: this.search }
        });
        this.$emit('update', this.search);
      }
    }
  };
</script>

<style scoped>
  a:hover{
    color: #651fff;
  }
  a{
    height: 36px;
    color: white;
    cursor: pointer;
  }
  .form{
    height: 36px;
    width: 40%;
    display: flex;
    flex-direction: row;
  }
  .searchBar{
    width: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .form{
      width: 80%;
    }
  }
</style>
