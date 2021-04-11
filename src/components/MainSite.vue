<template>
    <div class="main-site">
      <div id="home" class="strip1 wrapper fade-in">
          
          <div  class="sub-strip1 aside aside-2">
            <div class="strip-title fade-in-2"><span style="letter-spacing:0.05em;">Chartered Accountant Firm</span></div>
          </div>
           <div  class="about-us main">
            </div>
      </div>
      <div id="about" class="strip5 wrapper">
        <div  class="sub-strip5">
          <div class="strip-title5 fade-in"><span style="letter-spacing:0.05em;">About Us</span></div>
        </div>
        <div  class="contact main about fade-in" style="text-align:left;">
           
            <div>
                <span style="font-size:1.2em">Proprietor's Profile</span><br/>
                <span style="font-size:1.2em">CA Rajat Shah</span> <br/>
                <span style="font-size:0.8em"><v-icon size="18px" color="#fff">mdi-phone</v-icon> : 9594178988</span><br/>
                <span style="font-size:0.8em"><v-icon size="18px" color="#fff">mdi-email</v-icon>: rajat.shah@rssa.in</span>

                <ul style="margin-top:0.5em;margin-left:0.5em">
                <li class="abt-list">He has worked with BDO India LLP for over 3 years in Transaction Advisory Services and he has demonstrated track record in Tax re-structuring, Inbound & Outbound Advisory Services, FEMA Advisory, Internal Audit, Tax Due Diligence, Valuations, Auditing & Assurance, Tax Assessments, Appeals and Assessments.</li>
                <li class="abt-list">He worked as an articled assistant at reputed Chartered Accountants firm where he has conducted Statutory Audit, Internal Audit, Company Incorporation, RoC filings amongst others.</li>
                <li class="abt-list">He has been part of Board of Directors of a multinational company.</li>
                <li class="abt-list">He is accompanied by team of young  and energetic professionals.</li>
                </ul>
                <div style="margin-top:1em;font-size:0.8em"><a style="color:white;text-decoration:underline" :href="require('../assets/Rssa.pdf')" download="Rssa" target="_blank">Know More</a></div>
            </div>
        </div>
      </div>
      <div id="vision" class="strip5 wrapper">
          <div class="sub-strip5 ">
                <div class="strip-title5 fade-in"><span style="letter-spacing:0.05em;">Vision & Mission</span></div>
          </div>
          <div class="contact main about fade-in" style="text-align:left;">
            <ul style="margin-left:0.5em">
          <li class="abt-list">We aim to be a client's trusted partner by consistently delivering high-quality services.</li>
          <li class="abt-list">To leverage the credentials and experience of all internal stakeholders and be a partner in external stakeholders growth.</li>
          <li class="abt-list">To provide our prestigious clients with a realistic and ideal solutions.</li>
            </ul>
          </div>
      </div>
      <div id="values" class="strip2 wrapper ">
          <div  class="sub-strip5" >
          <div class="strip-title5 fade-in" ><span style="letter-spacing:0.05em;">Values</span></div>
          </div>
          <div class="about-us main">
            <div style="display:flex;flex-wrap:wrap;justify-content:center">
                <div class="values fade-in" :style="[windowWidth>1007? {'width':'28%'} : {}]" >
                <v-btn class="mx-2 value-btn" fab dark  color="rgb(1,85,160)">
                    <v-icon dark size="75px">
                        mdi-handshake-outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;margin-top:0.5em;">Commitment</span><br/>
                When we say we will do something, consider it done.
                </div>
                <div class="values fade-in" :style="[windowWidth>1007? {'width':'28%'} : {}]">
                <v-btn class="mx-2 value-btn" fab dark  color="rgb(1,85,160)">
                    <v-icon dark size="75px">
                        mdi-head-cog outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;margin-top:0.5em;">Integrity</span><br/>
                We practice honesty and consistency in whatever we do. Our experience speaks for our adherence to our morals.
                </div>
                <div class="values fade-in" :style="[windowWidth>1007? {'width':'28%'} : {}]">
                <v-btn class="mx-2 value-btn" fab dark  color="rgb(1,85,160)">
                    <v-icon dark size="75px">
                        mdi-eye-outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;margin-top:0.5em;">Vision</span><br/>
                We try to recognize our clients' needs and use our intuitive prowess to provide solutions to them.
                </div>
                <div class="values fade-in" :style="[windowWidth>1007? {'width':'28%'} : {}]">
                <v-btn class="mx-2 value-btn" fab dark  color="rgb(1,85,160)">
                    <v-icon dark size="75px">
                        mdi-check
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;margin-top:0.5em;">Respect</span><br/>
                We respect our clients, their needs and work together to reach their full potential.
                </div>
                <div class="values fade-in" :style="[windowWidth>1007? {'width':'28%'} : {}]">
                <v-btn class="mx-2 value-btn" fab dark  color="rgb(1,85,160)">
                    <v-icon dark size="75px">
                        mdi-clover
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;margin-top:0.5em;">Empathy</span><br/>
                 We strive to understand our clients' needs and problems and use our experience and knowledge to help them accomplish their goals.
                </div>
            </div>
          </div>
      </div>
      <div id="services" class="strip5 wrapper">
        <div  class="sub-strip5 aside aside-1">
          <div class="strip-title5 fade-in"><span style="letter-spacing:0.05em;">Our Services</span></div>
        </div>
        <div  class="contact main our-services">
            <v-expansion-panels >
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Assurance
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Accounting Advisory Services</li>
                         <li>Attestation Services</li>
                         <li>Statutory Audit</li>
                         <li>Internal Audit</li>
                         <li>Compliance Audit</li>
                         <li>Concurrent Audit</li>
                         <li>Financial Statement Audit</li>
                         <li>Inventory Audit</li>
                         <li>Asset Verification Audit</li>
                         <li>Management Audit</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Direct Taxation
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-expansion-panels :accordion='accordion'>
                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                Advisory
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <li>Pre-Transaction Advisory</li>
                                <li>Tax Risk Assessment</li>
                                <li>Corporate Tax Planning</li>
                                <li>Tax Holiday Planning</li>
                                <li>India Entry & Exit strategy from tax and regulatory perspective</li>
                                <li>Legal opinion on direct tax laws</li>
                                <li>HNI tax services</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                Compliances
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <li>Income Tax Returns</li>
                                <li>Equalization levy</li>
                                <li>ICDS compliances</li>
                                <li>Tax Audit</li>
                                <li>Valuations under Section 11UA</li>
                                <li>End-to-end assistance in undertaking tax withholding compliances</li>
                                <li>Assistance in preparing Quarterly Tax Computations from an Advance Tax perspective and other ancillary compliances from a tax perspective</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                Transfer Pricing
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <li>Transfer pricing planning and Documentation</li>
                                <li>Transfer Pricing Study Report</li>
                                <li>Litigation Support</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                Representation and Litigation
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <li>Income Tax Scrutiny Assessments</li>
                                <li>Appeal before ITAT</li>
                                <li>Assistance in obtaining Nil / Lower withholding tax certificates</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        </v-expansion-panels>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Transaction Advisory Services
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Mergers & Acquisitions Tax</li>
                         <li>Divestments / Slump sale / Demerger advisory</li>
                         <li>Internal Group Re-structuring</li>
                         <li>Buy side / Sell side transaction tax and regulatory advice</li>
                         <li>Valuation of Shares & Business</li>
                         <li>Incorporation of Companies / LLPs</li>
                         <li>Tax Due Diligence Services</li>
                         <li>Merger implementation through NCLT process</li>
                         <li>Project Financing</li>
                         <li>Loan Syndication</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       International Taxation
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Inbound and Outbound investment structuring</li>
                         <li>Advising on funding options for Cross-border Investment Acquisitions</li>
                         <li>Advise on tax-effective repatriation of profits</li>
                         <li>Advise on Permanent Establishment exposure and tax implications</li>
                         <li>Analyzing tax treaties including Limitation of Benefit provisions and advising on effective reduction in withholding tax rate in India</li>
                         <li>Analyze the impact of Place of Effective Management (POEM) rule for determining tax residential status of an overseas entity in India and highlighting its implications in India</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Indirect Tax
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Assistance in preparation / review of GST returns</li>
                         <li>Assistance in assessments and representations before authorities</li>
                         <li>GST Audit</li>
                         <li>Advisory on taxability of particular goods / services under GST</li>
                         <li>Obtaining GST Refunds</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel >
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Foreign Exchange Control Advisory & Compliance
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Analyzing the exchange control implications on foreign transactions</li>
                         <li>Highlighting gaps from an exchange control perspective and assisting in compliance</li>
                         <li>Assisting clients in ratifying the non-compliance through compounding process</li>
                         <li>Health check on compliance with the FEMA provisions</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Companies Law Support
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Company/ LLP incorporation services</li>
                         <li>Filing forms on MCA portal and meeting compliance requirements laid by Registrar of Companies</li>
                         <li>End to end implementation support in closure / winding up / liquidation of companies</li>
                         <li>Implementation support in matters of Buyback of shares, Bonus shares,  Capital Reduction Process, Issuance of shares and Increasing authorized share capital</li>
                         <li>Drafting share purchase agreement / share subscription agreement</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="fade-in">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Other Services
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>CFO Services</li>
                         <li>MIS Reporting Services</li>
                         <li>Bookkeeping and Accounting services</li>
                         <li>Payroll management services</li>
                         <li>Obtaining PAN / TAN /GST / PF / ESIC / Profession tax / Shop & Establishment registrations</li>
                         <li>Stamp Duty Planning</li>
                         <li>Formulation of ESOP Scheme and Effective Implementation</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            
        </div>
      </div>
      <div class="strip4"></div>
      <div id="contact" class="strip5 wrapper">
        <div  class="sub-strip5 aside aside-1">
          <div class="strip-title5 fade-in"><span style="letter-spacing:0.05em;">Contact Us</span></div>
        </div>
        <div  class="contact main fade-in">
            <div style="display:flex;">
              <v-icon dark size="30px" @click="goToMap()">mdi-map-marker</v-icon> 
              <div @click="goToMap()">Our Address</div>
            </div>
            <div style="margin-top:1em;margin-bottom:1em;">
                11, Harman House, Goraswadi<br/>
                Near Thunga Hospital, Malad-West<br/>
                Mumbai - 400064
            </div>
            <div style="margin-bottom:1em;">Mob No.:&nbsp;+91 9594178988</div>
            <div style="margin-bottom:1em;">Email Us:&nbsp;<a style="color:white;text-decoration:underline" href="mailto:rajat.shah@rssa.in">rajat.shah@rssa.in</a> </div>
            <div style="margin-bottom:1em;font-size:1em;">Write to us:</div>
            
            <form name="Contact-Form" action="" method="post" data-netlify-honeypot="bot-field" class="contact-form" netlify>
              <input type="hidden" name="form-name" value="Contact-Form" />
              <div style="display:flex;flex-wrap:wrap;box-sizing:content-box">
                <div style="margin-right:1em">
                  First Name*
                  <v-text-field name="First Name" :rules="[rules.name]" required outlined background-color="#ffff" v-model="profile.firstName"></v-text-field>
                  Last Name*
                  <v-text-field name="Last Name" :rules="[rules.name]" required outlined background-color="#ffff" v-model="profile.lastName"></v-text-field>
                  Phone No*
                  <v-text-field name="Phone No" :rules="[rules.phnumber]" required outlined background-color="#ffff" v-model="profile.phno"></v-text-field>
                  Email*
                  <v-text-field name="Email" :rules="[rules.email]" required outlined background-color="#ffff" v-model="profile.email"></v-text-field>                
                </div>
                <div>
                  Message*
                  <v-textarea name="Message" required outlined background-color="#ffff" :height="[windowWidth>971? '24.3em' : '13em']" v-model="profile.message"></v-textarea>
                </div>
              </div>
              <v-btn type="submit" class="submit-btn" tile :onsubmit="validate" >Submit</v-btn>
            </form>
            
        </div>
      </div>
      <a href="#top"><div class="strip6">Back to top</div></a>
    </div>
</template>
<script>
export default {
    name:"MainSite",
    props:["windowWidth"],
    data(){
        return{
            accordion:false,
            profile:{firstName:null,lastName:null,phno:null,email:null,message:null},
            error:[],
            rules: {
                phnumber: value => {
                    const pattern = /[0-9]$/
                    return (pattern.test(value)&&value.length==10) || 'Invalid Phone number.'
                },
                name: value =>{
                    const pattern = /[A-Za-z]$/
                    return (pattern.test(value)) || 'Invalid Name.'
                },
                email: value =>{
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            },
            fadeInElements:[]
        }
    },
    mounted(){
      this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
      document.addEventListener('scroll', this.handleScroll)
      this.handleScroll();
    },
    beforeDestroy(){
      document.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
    handleScroll () {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i];
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
          this.fadeInElements.splice(i, 1) // only allow it to run once
        }
      }
    },
    isElemVisible(el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 200 // 200 = buffer
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    goToMap(){
      this.$router.push({name:'Location'});
    },
    validate:function (e) {
        const pattern1 = /[0-9]$/
        const pattern2 = /[A-Za-z]$/
        const pattern3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(pattern1.test(this.profile.phno)&&pattern2.test(this.profile.firstName)&&pattern2.test(this.profile.lastName)&&pattern3.test(this.profile.email))
            return true;
        e.preventDefault();
      },
      
      }
    

};
</script>
<style>
.main-site{
    font-size: 36px;
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
  background-image: url("../assets/intro-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
 
}

.sub-strip1{
  position:relative;
  top:0;
  left:0;
  background-color: rgb(1, 85, 160,0.65);
  display:flex;
  align-items: center;
  justify-content: center;
  padding-right:1em;
  padding-left:1em;
}
.strip-title{
  font-size: 1.5em;
  color: rgb(255, 255, 255);
}
.strip2{
  display:flex;
  width:100%;
  position: relative;
}

.about-us{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 0.5em;
  color:  rgb(0, 48, 91);
  text-align: left;
  padding:1.5em;
  box-sizing: border-box;
  line-height: 1.5;
}

.about{
  padding-left: 2.5em !important;
  padding-right: 2.5em !important;
}
.abt-list{
  margin-bottom:1em;
}

.strip3{
  background-color: rgb(0, 48, 91);
  color: white;
  font-size: 0.8em;
  font-weight: 100;
  text-align: center;
  padding-top:1em;
  padding-bottom: 3em;

  line-height: 1.5;
  display: grid;
}
.strip3-title{
  font-size: 1em !important;
  margin: 1em;
}
.strip4{
  background-image: url("../assets/video-conferencing-meeting.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width:100%;
  height:70vh;
}
.strip5{
  display:flex;
  width:100%;
  position: relative;
  background-image: url("../assets/conference-room.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.our-services{
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1em;
  
}
.values{
    display:flex;
    flex-direction: column;
    align-items: center;;
    justify-items: center;
    text-align: justify;
    text-align-last: center;
    margin:1em;
    font-size: 1.1em;
    font-weight:normal;
}
.value-btn{
    margin:0.5em;
    width: 120px  !important;
    height: 120px !important;
    box-shadow: -15px 11px 20px 1px grey !important;
}
.sub-strip5{
  position:relative;
  top:0;
  left:0;
  background-color:rgba(1, 85, 160,1);
  display:flex;
  align-items: center;
  justify-content: center;
}
.strip-title5{
  font-size: 1em;
  color: rgb(255, 255, 255);
  margin: auto;
  padding-top:1.5em;
  padding-bottom: 1.5em;
}
.contact{

  position: relative;
  font-size: 0.7em;
  background-color: rgba(25,118,210,0.52);
  text-align: left;
  padding-left: 1em;
  padding-top: 2em;
  color: #fff;
  box-sizing: border-box;
  padding-bottom: 1.5em;
  padding-right: 1em;
}
.contact-form{
  color:white;
  font-size: 0.8em;
}
.background{
  background-color: rgb(12, 38, 107); 
}
.v-input__slot{
  width: 18em!important;
  opacity:1;
  margin-right:1em;
}
.v-messages{
  color:red !important;
  font-size: 16px !important;
}
#input-82{
  line-height: 1.5 !important;
}

#input-83{
  line-height: 1.5 !important;
}
.submit-btn{
  color:white !important;
  width:90% !important;
  font-size:1em !important;
  background-color: rgb(1,85,160) !important;
  border: 1px solid white;
}
.strip6{
    background-color:rgb(1,85,160) ;
    color: white !important;
    font-size:1em;
    border-top: 1px solid white;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
}
.v-expansion-panel-header{
    justify-content: space-between;
    font-weight: bold;
    color: rgb(0, 48, 91);
    font-size:1.2em !important;
    text-align: left;
}
.v-expansion-panel-content{
    font-weight: 500 !important;
    font-size:0.888em;
    margin-left: 1em;
}
.v-expansion-panel{
        color: rgb(0, 48, 91)  !important;
        margin-bottom: 0.5em;

}
.v-expansion-panels{
  z-index:0;
}

@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fade-in{
    opacity: 0;
    transition: 0.3s all linear;
}

.fade-in-2{
    opacity: 0;
    animation: fadeIn 0.3s ease-in  forwards;
}

@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}

@media all and (min-width: 800px) {
  .main    { flex: 3 0px; }
  .aside-1 { order: 1; } 
  .main    { order: 2; }
  .aside-2 { order: 2; }
}

@media (max-width: 600px){
  .main-site { font-size: 30px; }
}
</style>