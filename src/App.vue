<template>
  <div id="app">
    <div class="web-site">
      <div class="menu-bar">  
        <span style="margin-left:1em;cursor:pointer"><a style="color:rgb(0, 48, 91)" href="/#home">Rajat S. Shah & Associates</a></span>
        <div style="display:flex" v-if="window.width>800">
          <a href="/#home"><div class="menu-item">Home</div></a>
          <a href="/#about"><div class="menu-item">About Us</div></a>
          <a href="/#services"><div class="menu-item">Services</div></a>
          <a href="/#contact"><div class="menu-item">Contact</div></a>
        </div>
        <div v-else>
            <v-icon  @click.stop="drawer = !drawer" style="margin-right:1em">
              mdi-menu
            </v-icon>
        </div>
        
      </div>
      <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <a href="/#home">
          <v-list-item>
            <v-list-item-title class="list-item-css">Home</v-list-item-title>
          </v-list-item>
        </a>
        <a href="/#about">
          <v-list-item>
            <v-list-item-title class="list-item-css">About Us</v-list-item-title>
          </v-list-item>
        </a>
        <a href="/#services">
          <v-list-item>
            <v-list-item-title class="list-item-css">Services</v-list-item-title>
          </v-list-item>
        </a>
        <a href="/#contact">
          <v-list-item>
            <v-list-item-title class="list-item-css">Contact</v-list-item-title>
          </v-list-item>
        </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <router-view :windowWidth="window.width"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      drawer: false,
      group: null,
      window:{
        width:0,
        height:0
      }
    }
  },
  created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
  },
  destroyed() {
        window.removeEventListener('resize', this.handleResize);
  },

  methods:{

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    goToHome(){
      this.$router.push({name:'MainSite'})
    }
  },
 watch: {
      group () {
        this.drawer = false
      }
    },

}
</script>

<style>
html{
  scroll-behavior:smooth !important;
  scroll-padding-top: 80px;
  font-family: Calibri;
  font-size:36px !important;
}
a:link, a:visited{
  text-decoration: none;
  color: rgb(43, 43, 44);
}
.web-site{
  max-width:100vw !important;
}
.menu-bar{
border-bottom-style: solid;
border-bottom-color: rgb(0, 48, 91);
border-bottom-width: thin;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;
height: 100px;
background-color: white;
z-index: 1;
color: rgb(43, 43, 44);
}
.menu-item{
  margin-right: 1em;
  font-size: 0.6em;
  cursor: pointer;
}
.menu-item{
  opacity:0.5;
}
.menu-item:hover{
  opacity:1;
}
.list-item-css{
  color:rgb(0, 48, 91) !important;
  font-size: 0.5em !important;
}

</style>
