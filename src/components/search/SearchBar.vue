<template>
  <div class="searchBar">
    <div class="form">
      <input autocomplete="off" @keyup.enter.prevent="goSearch" v-model="search" id="search" type="text" placeholder="Search...">
      <div><a @click="goSearch"><i class="material-icons">search</i></a></div>
    </div>
    <span><input @change="goSearch" type="radio" class="radio" id="global" name="searchType" value="global" v-model="picked" checked><label for="global">All result</label>
      <input @change="goSearch" type="radio" class="radio" id="albums" name="searchType" value="albums" v-model="picked"><label for="albums">Albums</label>
      <input @change="goSearch" type="radio" class="radio" id="artists" name="searchType" value="artists" v-model="picked"><label for="artists">Artists</label>
      <input @change="goSearch" type="radio" class="radio" id="tracks" name="searchType" value="tracks" v-model="picked"><label for="tracks">Tracks</label>
      <input @change="goSearch" type="radio" class="radio" id="users" name="searchType" value="users" v-model="picked"><label for="users">Users</label></span>
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
        this.$router.replace({
          name: 'Search', query: { q: this.search, limit: this.limit }
        });
        this.$emit('update', { searchTerm: this.search, searchType: this.picked, limit: this.limit });
      }
    },
    created() {
      this.search = this.$route.query.q;
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
  [type="radio"]:not(:checked)+label, [type="radio"]:checked+label {
    font-size: 1rem;
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .form{
      width: 70%;
      height: 52px;
      font-size: 3rem;
    }
    a{
      height: 46px;
    }
    .radio{
      font-size: 3rem;
    }
    i{
      height: 46px;
      width: 46px;
      font-size: 3rem;
    }
    #search{
      font-size: 2rem;
    }
    [type="radio"]{
      transform: scale(3);
    }
    [type="radio"]:not(:checked)+label, [type="radio"]:checked+label{
      font-size: 2rem;
      margin-right: 10px;
    }
    input{
      font-size: 3rem;
    }
    label{
      font-size: 3rem;
    }
    .searchBar {
      margin-top: 100px;
    }
  }
  @media only screen and (min-device-width : 568px) and (max-device-width : 853px)
  and (orientation: landscape) {
    .form{
      width: 70%;
      height: 52px;
      font-size: 1.5rem;
    }
    a{
      height: 46px;
    }
    .radio{
      font-size: 1.5rem;
    }
    i{
      height: 46px;
      width: 46px;
      font-size: 2.5rem;
    }
    #search{
      font-size: 1.5rem;
    }
    [type="radio"]{
      transform: scale(3);
    }
    [type="radio"]:not(:checked)+label, [type="radio"]:checked+label{
      font-size: 1.5rem;
      margin-right: 10px;
    }
    input{
      font-size: 1.5rem;
    }
    label{
      font-size: 1.5rem;
    }
    .searchBar {
      margin-top: -42px;
    }
  }
</style>
