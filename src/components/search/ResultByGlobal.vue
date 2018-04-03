<template>
  <div class="listSearch">
    <div class="result" v-for="result of results" :key="result.index">
      <div class="resultType" v-if="result.wrapperType === 'track'" >
        <div class="resultJacket">
          <router-link :to="{ name : 'Album', params: { collectionId: result.collectionId }}">
            <img :src="artwork(result.artworkUrl100)"/>
          </router-link>
        </div>
        <div class="resultName">
        <div class="resultTitle">{{result.trackName}}</div>
        </div>
      </div>
      <div class="resultType" v-else-if="result.wrapperType === 'collection'" >
        <div class="resultJacket">
          <router-link :to="{ name : 'Album', params: { collectionId: result.collectionId }}">
            <img :src="artwork(result.artworkUrl100)"/>
          </router-link>
        </div>
        <div class="resultName">
        <div class="resultTitle">{{result.collectionName}}</div>
        </div>
      </div>
      <div class="resultType" v-else="result.wrapperType === 'artist'" >
        <div class="resultJacket">
        </div>
        <div class="resultName">
        <div class="resultTitle">{{result.artistName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'ResultByGlobals',
    props: {
      searchTerm: '',
      results: []
    },
    methods: {
      artwork(artworkUrl) {
        return util.getUrlOfBiggerAlbumArtwork(artworkUrl, 250);
      }
    },
    async created() {
      this.searchTerm = this.$route.query.q;
    }
  };
</script>

<style scoped>
  .listSearch{
    margin: auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    text-align: center;
    justify-content: center;

  }
  .result{
    margin: 20px 15px 15px 15px;
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
  }
  .resultJacket{
    margin-right: 10px;
  }
  .resultName{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    font-weight: bold;
  }
  .resultTitle{
    width: 100%;
    font-size: 1rem;
    text-align: left;
    color: white;
    margin: 0;
  }
  img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .listSearch{
      display: block;
    }
    .result {
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      margin: 20px auto;
      justify-content: center;
      max-width: unset;
    }
    .resultJacket {
      margin-right: 10px
    }
    .resultTitle {
      font-size: 2rem;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (min-device-width : 568px) and (max-device-width : 853px)
  and (orientation: landscape){
    .result{
      flex-direction: row;
      flex-wrap: nowrap;
      width: 50%;
      margin: 20px auto;
      justify-content: center;
      max-width: unset;
    }
    .resultJacket {
      margin-right: 20px;
    }
    img {
      width: 150px;
      height: 150px;
    }
    .resultTitle {
      font-size: 1.5rem;
    }
  }
</style>

