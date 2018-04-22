<template>
  <div class="listSearch">
    <div class="result" v-for="result of results" :key="result.index">
      <div class="resultType" v-if="result.wrapperType === 'track'" >
        <div class="resultJacket">
          <router-link :to="{ name : 'Album', params: { collectionId: result.collectionId }}">
            <img :src="artwork(result.artworkUrl100, 250)"/>
          </router-link>
        </div>
        <div class="resultName">
          <div class="resultTitle">{{result.trackName}}</div>
          <div class="resultInfo">Track</div>
        </div>
      </div>
      <div class="resultType" v-else-if="result.wrapperType === 'collection'" >
        <div class="resultJacket">
          <router-link :to="{ name : 'Album', params: { collectionId: result.collectionId }}">
            <img :src="artwork(result.artworkUrl100, 250)"/>
          </router-link>
        </div>
        <div class="resultName">
          <div class="resultTitle">{{result.collectionName}}</div>
          <div class="resultInfo">Album</div>
        </div>
      </div>
      <div class="resultType" v-else-if="result.wrapperType === 'artist'" >
        <div class="resultJacket">
          <router-link :to="{ name : 'Artist', params: { artistId: result.artistId }}">
            <img src="../../assets/empty-artist-photo.png"/>
          </router-link>
        </div>
        <div class="resultName">
          <div class="resultTitle">{{result.artistName}}</div>
          <div class="resultInfo">Artist</div>
        </div>
      </div>
      <div class="resultType" v-else>
        <div class="resultJacket">
          <router-link :to="{ name : 'User', params: { userId: result.id }}">
            <img src="../../assets/empty-user-photo.png"/>
          </router-link>
        </div>
        <div class="resultName">
          <div class="resultTitle">{{result.name}}</div>
          <div class="resultInfo">Users</div>
        </div>
      </div>
    </div>
    <div class="button"><a class="btn"@click="update2"><span class="textAlign">More Results...</span></a></div>
  </div>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'ResultByGlobal',
    props: {
      limit: '',
      searchType: '',
      searchTerm: '',
      results: {
        type: Array,
        required: false
      },
    },
    methods: {
      update2() {
        this.$emit('update2', { limit: this.limit });
      },
      artwork(artworkUrl, dimension) {
        return util.getUrlOfBiggerAlbumArtwork(artworkUrl, dimension);
      },
    }
  };
</script>

<style scoped>
  .btn {
    background: #651fff;
    background-image: -webkit-linear-gradient(top, #651fff, #651fff);
    background-image: -moz-linear-gradient(top, #651fff, #651fff);
    background-image: -ms-linear-gradient(top, #651fff, #651fff);
    background-image: -o-linear-gradient(top, #651fff, #651fff);
    background-image: linear-gradient(to bottom, #651fff, #651fff);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    width: 90vw;
    height: 25px;
    vertical-align: middle;
    line-height: 25px;
  }
  .textAlign {
    font-size: 1rem;
    vertical-align: middle;
    text-align: center;
  }
  .btn:hover {
    background: #651fff;
    background-image: -webkit-linear-gradient(top, #651fff, #651fff);
    background-image: -moz-linear-gradient(top, #651fff, #651fff);
    background-image: -ms-linear-gradient(top, #651fff, #651fff);
    background-image: -o-linear-gradient(top, #651fff, #651fff);
    background-image: linear-gradient(to bottom, #651fff, #651fff);
    text-decoration: none;
  }
  .button {
    bottom: 0;
    width: 90vw;
    display: inline-block;
  }
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
  .resultType {
    margin: 20px 15px 15px 15px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
  }
  .resultJacket{
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
  .resultInfo{
    width: 100%;
    color: #e5e5e5;
    font-size: 0.8rem;
    text-align: left;
  }
  img {
    object-fit: contain;
    width: 250px;
    height: 250px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .listSearch{
      display: block;
    }
    .resultType {
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
    .textAlign {
      font-size: 2rem;
    }
    .btn {
      height: 35px;
      line-height: 35px;
    }
    .resultInfo {
      font-size: 1.5rem;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (min-device-width : 568px) and (max-device-width : 853px)
  and (orientation: landscape){
    .result {
      display: flex;
      width: 50%;
    }
    .resultType {
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
    .btn {
      height: 30px;
      line-height: 30px;
    }
    .textAlign {
      font-size: 1.5rem;
    }
    .resultInfo {
      font-size: 1.15rem;
    }
  }
</style>

