<template>
  <div class="listSearch">
    sdfgsdfgsefgsd
    <div class="result" v-for="result of results">
      <div class="searchName">
        <div
          v-if="result.wrapperType === 'track'">{{result.trackName}}
          <img :src="result.artworkUrl100"/>
        </div>
        <div
          v-if="result.wrapperType === 'artist'">{{result.artistName}}
        </div>
        <div
          v-if="result.wrapperType === 'collection'">
          <div
            class="searchJacket">
            <img :src="result.artworkUrl100"/>
            <router-link :to="{ name : 'Album', params: { collectionId: result.collectionId }}">
              <img :src="artwork(album.artworkUrl100)"/>
            </router-link>
          </div>
          <div class="albumTitle">
            <div class="diskTitle">{{result.collectionName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Result',
    props: {
      searchTerm: '',
      results: []
    },
    async created() {
      this.searchTerm = this.$route.query.q;
    }
  };
</script>

<style scoped>
  .wrapperType{
    width: 100%;
    color: #e5e5e5;
    font-size: 0.8rem;
    text-align: left;
  }
</style>
