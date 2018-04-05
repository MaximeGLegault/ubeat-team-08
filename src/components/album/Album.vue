 <template>
   <div>
     <albumDescription v-if="albumDescriptionDataObject"
                       :key="albumDescriptionDataObject.collectionId"
                       :description="albumDescriptionDataObject"/>
     <trackList :tracks="trackList"/>
   </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import api from '@/lib/api';
  import util from '@/lib/util';
  import AlbumDescription from './AlbumDescription';
  import TrackList from './Tracklist';

  export default {
    name: 'album',
    components: {
      AlbumDescription,
      TrackList
    },

    data() {
      return {
        albumDescriptionDataObject: {},
        trackList: []
      };
    },
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    },
    async created() {
      await api.getAlbum(this.$route.params.collectionId)
        .then((value) => {
          const description = value.results[0];
          description.albumLength = '';
          this.albumDescriptionDataObject = description;
        }).catch((error) => {
          if (error.response.status === 401) {
            this.$router.push('/login');
          }
        });
      await api.getTracksOfAlbum(this.$route.params.collectionId)
        .then((value) => {
          this.trackList = value.results;
          this.albumDescriptionDataObject.albumLength =
            util.getLengthFromMilliseconds(this.trackList
              .reduce((total, num) => {
                const newTotal = total + num.trackTimeMillis;
                return newTotal;
              }, 0));
          this.albumDescriptionDataObject.trackCount = this.trackList.length;
        }).catch((error) => {
          if (error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    }
  };
</script>

<style>

</style>
