<template>
  <div id="app">
    <div class="web-site">
      <div class="menu-bar">
        
          
        <span style="font-size:2.5rem;color:rgb(0, 48, 91);margin-left:1em">Rajat Shah & Associates</span>
        
        <div style="display:flex" v-if="screenWidth>600">
          <div class="menu-item"><a href="#home">Home</a></div>
          <div class="menu-item"><a href="#about">About Us</a></div>
          <div class="menu-item"><a href="#vision">Vision</a></div>
          <div class="menu-item"><a href="#services">Services</a></div>
          <div class="menu-item"><a href="#contact">Contact</a></div>
        </div>
        <div v-else><v-btn @click.stop="drawer = !drawer"></v-btn></div>
        
      </div>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      
      <div id="home" class="strip1 wrapper">
          
          <div  class="sub-strip1 aside aside-2">
            <div class="strip-title"><span style="letter-spacing:0.05em;">Chartered Accountant Firm</span></div>
          </div>
           <div  class="about-us main">
            </div>
      </div>
      <div id="about" class="strip2 wrapper">
        <div  class="sub-strip2 aside aside-1">
          <div class="strip-title2"><span style="letter-spacing:0.05em;">About Us</span></div>
        </div>
        <div  class="about-us main">
           
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>
      <div id="vision" class="strip3">
            <span class="strip3-title">Our Vision</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div id="services" class="strip2 wrapper">
        <div  class="sub-strip2 aside aside-1">
          <div class="strip-title2"><span style="letter-spacing:0.05em;">Our Services</span></div>
        </div>
        <div  class="about-us main our-services">
           <v-list
      subheader
      three-line
    >
      <v-subheader>User Controls</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Content filtering</v-list-item-title>
          <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
            
        </div>
      </div>
      <div class="strip4"></div>
      <div id="contact" class="strip5 wrapper">
        <div  class="sub-strip5 aside aside-1">
          <div class="strip-title5"><span style="letter-spacing:0.05em;">Contact Us</span></div>
        </div>
        <div  class="contact main">
            Our Address
            <div style="font-weight:50;margin-top:1em;margin-bottom:1em;">
              440, Kanakia,<br/>
              Dadar, Mumbai
            </div>
            <div style="font-weight:50;margin-bottom:1em;font-size:0.75em;">For any general inquiries, please fill in the following contact form:</div>
            <v-form class="contact-form">
              <div style="display:flex;flex-wrap:wrap;">
                <div style="margin-right:1em">
                  First Name*
                  <v-text-field :rules="[rules.required]" outlined background-color="#ffff" v-model="profile.firstName"></v-text-field>
                  Last Name*
                  <v-text-field :rules="[rules.required]" outlined background-color="#ffff" v-model="profile.lastName"></v-text-field>
                  Phone No*
                  <v-text-field :rules="[rules.required,rules.phnumber]" outlined background-color="#ffff" v-model="profile.phno"></v-text-field>
                </div>
                <div>
                  Message*
                  <v-textarea :rules="[rules.required]" outlined background-color="#ffff" height="17.3em" v-model="profile.message"></v-textarea>
                </div>
              </div>
              <v-btn class="submit-btn" outlined tile @click="submit()">Sumbit</v-btn>
            </v-form>
        </div>
      </div>
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
      screenWidth:screen.width,
      drawer: false,
      group: null,
      profile:{firstName:null,lastName:null,phno:null,message:null},
      rules: {
          required: value => !!value || 'Required.',
          phnumber: value => {
            const pattern = /[0-9]$/
            return (pattern.test(value)&&value.length==10) || 'Invalid Phone number.'
      }
      }
    }
  },
  methods:{
    submit(){

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
  scroll-padding-top: 70px;
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

.wrapper {
  display: flex;  
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  overflow-x: hidden  !important;
}

.wrapper > * {
  padding: 10px;
  flex: 1 100%;
}

.strip1{
  display:flex;
  width:100%;
  height:110vh;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
 
}

.sub-strip1{
  position:relative;
  /* height:110vh; */
  /* width: 40%; */
  top:0;
  left:0;
  background-color: rgb(0, 48, 91);
  display:flex;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
}
.strip-title{
  font-size: xxx-large;
  font-family: -webkit-pictograph;
  color: rgb(255, 255, 255);
  margin-left: 0.5em;
}
.strip2{
  display:flex;
  width:100%;
  height:110vh;
  position: relative;
}

.sub-strip2{
  position:relative;
  /* height:100vh; */
  /* width: 40%; */
  top:0;
  left:0;
  background-color: rgb(234,244,246);
  display:flex;
  align-items: center;
  justify-content: center;

}
.strip-title2{
  font-size: xxx-large;
  font-family: -webkit-pictograph;
  color: rgb(4, 20, 65);
  margin-left: 0.5em;
}
.about-us{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: larger;
  font-family: -webkit-pictograph;
  color:  rgb(0, 48, 91);
  text-align: left;
  padding-left:1em;
  box-sizing: border-box;
}

.strip3{
  background-color: rgb(0, 48, 91);
  color: white;
  font-size: larger;
  font-weight: lighter;
  text-align: center;
  padding-top:1em;
  padding-bottom: 3em;
  padding-left: 7em;
  padding-right: 7em;
  line-height: 1.5;
  display: grid;
}
.strip3-title{
  font-weight: bold;
  font-size: xx-large;
  font-family: -webkit-pictograph;
  margin: 1em;
}
.strip4{
  background-image: url("https://www.clearvc.co.uk/wp-content/uploads/2018/01/video-conferencing-meeting-rooms-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width:100%;
  height:70vh;
}
.strip5{
  display:flex;
  width:100%;
  height:110vh;
  position: relative;
  background-image: url("https://build-amsterdam.imgix.net/upload/40ed796bdf0dc53633ddd14fd1d076b8e41f86ddc9b67c58fcba3f9318bb5859?flip=h&dl=conference-room.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.our-services{
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2em;
  font-size: larger;
  
}
.sub-strip5{
  position:relative;
  top:0;
  left:0;
  background-color:rgb(0, 48, 91);
  display:flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
}
.strip-title5{
  font-size: xxx-large;
  font-family: -webkit-pictograph;
  color: rgb(255, 255, 255);
  margin-left: 0.5em;
}
.contact{

  position: relative;
  font-size: 1.5em;
  font-family: -webkit-pictograph;
  background-color:rgb(31, 86, 137);
  text-align: left;
  opacity: 0.85;
  padding-left: 1em;
  padding-top: 2em;
  color: #fff;
}
.contact-form{
  color:white;
  font-size: large;
}
.background{
  background-color: rgb(12, 38, 107); ;
}
.v-input__slot{
  width: 20em !important;
  
}
.submit-btn{
  color:white !important;
  width:47em !important;
}

@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}

@media all and (min-width: 800px) {
  .main    { flex: 3 0px; }
  .aside-1 { order: 1; } 
  .main    { order: 2; }
  .aside-2 { order: 2; }
  .sub-strip121 {order: 1;}
  .sub-strip122 {order: 3;}
  
}


</style>
