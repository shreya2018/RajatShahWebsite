<template>
  <div id="app">
    <div class="web-site">
      <div class="menu-bar">  
        <span style="font-size:2.5em;color:rgb(0, 48, 91);margin-left:1em;cursor:pointer" @click="goToHome()">Rajat Shah & Associates</span>
        <div style="display:flex" v-if="window.width>800">
          <div class="menu-item"><a href="/#home">Home</a></div>
          <div class="menu-item"><a href="/#about">About Us</a></div>
          <div class="menu-item"><a href="/#vision">Vision</a></div>
          <div class="menu-item"><a href="/#services">Services</a></div>
          <div class="menu-item"><a href="/#values">Values</a></div>
          <div class="menu-item"><a href="/#contact">Contact</a></div>
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
          class="list-item-css"
        >
          <v-list-item>
            <v-list-item-title><a href="/#home">Home</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="/#about">About Us</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="/#vision">Vision</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="/#services">Services</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="/#values">Values</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="/home#contact">Contact</a></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <router-view></router-view>
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
    // detectScreenWidth(){
    //   if(screen.width>750)
    //     return true
    //   else
    //     return false
    // },
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
  font-family: 'Trebuchet MS';
  font-size:32px;
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
  font-size: 1.2em;
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
