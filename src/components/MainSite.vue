<template>
    <div class="main-site">
      <div id="home" class="strip1 wrapper">
          
          <div  class="sub-strip1 aside aside-2">
            <div class="strip-title"><span style="letter-spacing:0.05em;">Chartered Accountant Firm</span></div>
          </div>
           <div  class="about-us main">
            </div>
      </div>
      <div id="about" class="strip2 wrapper">
        <div  class="sub-strip2 aside aside-1">
          <div class="strip-title2"><span style="letter-spacing:0.05em;">About</span></div>
        </div>
        <div  class="about-us main">
           
            <div>
                <ul style="list-style-type:disc;">
                <li>CA Rajat Shah has worked with BDO India LLP for over 3 years in Transaction Advisory Services and he has demonstrated track record in Tax re-structuring, Inbound & Outbound Advisory Services, FEMA Advisory, Internal Audit, Tax Due Diligence, Valuations, Auditing & Assurance, Tax Assessments, Appeals and Assessments.</li>
                <li>He worked as an articled assistant at reputed Chartered Accountants firm where he has conducted Statutory Audit, Internal Audit, Company Incorporation, RoC filings amongst others.</li>
                <li>He has been part of Board of Directors of a multinational company.</li>
                <li>He is accompanied by team of young  and energetic professionals.</li>
                </ul>
            </div>
        </div>
      </div>
      <!-- <div id="vision" class="strip3">
            <span class="strip3-title">Vision</span>
            We intend to be trusted advisor of clients by constantly providing quality services to clients
            <span class="strip3-title">Mission</span>
            To leverage the credentials and experience of all internal stakeholders and be a partner in external stakeholders growth.<br/> To provide practical and optimum solution to our venerable clients
      </div> -->
      <div id="vision" class="strip5 wrapper">
          <div class="sub-strip5 aside aside-1">
                <div class="strip-title5"><span style="letter-spacing:0.05em;">Vision <br/>& <br/>Mission</span></div>
          </div>
          <div class="contact main">
          We intend to be trusted advisor of clients by constantly providing quality services to clients<br/><br/>
          To leverage the credentials and experience of all internal stakeholders and be a partner in external stakeholders growth.<br/> To provide practical and optimum solution to our venerable clients.
          </div>
      </div>
      <div id="services" class="strip2 wrapper">
        <div  class="sub-strip2 aside aside-1">
          <div class="strip-title2"><span style="letter-spacing:0.05em;">Our Services</span></div>
        </div>
        <div  class="about-us main our-services">
            <v-expansion-panels >
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Assurance
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Accounting Advisory Services</li>
                         <li>Attestation, Audit & Assurance</li>
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

                <v-expansion-panel>
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
                                <li>Tax Planning Holiday </li>
                                <li>India entry & exit strategy from tax and regulatory perspective</li>
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
                                <li>MAT / AMT Certificates</li>
                                <li>End-to-end assistance in undertaking tax withholding compliances</li>
                                <li>Assistance in preparing quarterly tax computations from an advance tax perspective and other ancillary compliances from a tax perspective</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                Transfer Pricing
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <li>Transfer pricing planning</li>
                                <li>Documentation</li>
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

                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Transaction Advisory Services
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Mergers & Acquisitions Tax</li>
                         <li>Divestments / slump sale / demerger advisory</li>
                         <li>Internal Group Re-structuring</li>
                         <li>Buy side / Sell side transaction tax and regulatory advice</li>
                         <li>Valuation of Shares & Business</li>
                         <li>Incorporation if Companies / LLPs</li>
                         <li>Tax Due Diligence Services</li>
                         <li>Merger implementation through NCLT process</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       International Taxation
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Inbound investment and Outbound investment structuring</li>
                         <li>Advising on funding options for cross-border investment acquisitions</li>
                         <li>Advise on tax-effective repatriation of profits</li>
                         <li>Advise on Permanent Establishment exposure and tax implications</li>
                         <li>Analyzing tax treaties including Limitation of Benefit provisions and advise on effective reduction in withholding tax implications in India</li>
                         <li>Analyze the impact of Place of Effective Management (POEM) rule for determining tax residential status of an overseas entity in India and highlighting its implications in India</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        Indirect Tax
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Assistance in preparation / review of GST returns;</li>
                         <li>Assistance in assessments and representations before the authorities</li>
                         <li>GST Audit</li>
                         <li>Advisory on taxability of particular goods / services under GST</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Foreign Exchange Control Advisory & Compliance
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Analyzing the exchange control implications on transactions</li>
                         <li>Highlighting gaps from an exchange control perspective and assist in compliance</li>
                         <li>Assisting clients in ratifying the non-compliance through compounding process</li>
                         <li>Health check on compliance with the FEMA provisions</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Companies Law Support
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>Company incorporation Services</li>
                         <li>Filing forms on MCA portal and meeting compliance requirements laid by Registrar of Companies</li>
                         <li>End to end implementation support in closure / winding up / liquidation of companies</li>
                         <li>Implementation support in matters of Buyback of shares, Bonus shares,  Capital Reduction Process, issuance of shares, increasing authorized share capital</li>
                         <li>Drafting share purchase agreement / share subscription agreement</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                       Other Services
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ul>
                         <li>CFO Services</li>
                         <li>MIS Reporting Services</li>
                         <li>Bookkeeping and accounting services</li>
                         <li>Payroll management services</li>
                         <li>Obtaining PAN / TAN /GST / PF / ESIC / Profession tax / Shop & Establishment registrations</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            
        </div>
      </div>
      <div class="strip4"></div>
      <div id="values" class="strip2 wrapper">
          <div  class="sub-strip2 aside aside-1">
          <div class="strip-title2"><span style="letter-spacing:0.05em;">Values</span></div>
          </div>
          <div class="about-us main">
            <div style="display:flex;flex-wrap:wrap;justify-content:center">
                <div class="values">
                <v-btn class="mx-2 value-btn" fab dark large color="rgb(0, 48, 91">
                    <v-icon dark>
                        mdi-handshake-outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;">Commitment</span><br/>
                When we say we will do something, consider it done.
                </div>
                <div class="values">
                <v-btn class="mx-2 value-btn" fab dark large color="rgb(0, 48, 91">
                    <v-icon dark>
                        mdi-check
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;">Respect</span><br/>
                We hold acheivement in high esteem and assist each other to reach their full potential.
                </div>
                <div class="values">
                <v-btn class="mx-2 value-btn" fab dark large color="rgb(0, 48, 91">
                    <v-icon dark>
                        mdi-head-cog outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;">Integrity</span><br/>
                Our essence is rooted in being honest and staright forward. Our advices come from age-old experience and we only advocate what we truly believe.
                </div>
                <div class="values">
                <v-btn class="mx-2 value-btn" fab dark large color="rgb(0, 48, 91">
                    <v-icon dark>
                        mdi-eye-outline
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;">Vision</span><br/>
                We strive to deeply discern our client's needs and utilize our intuitive prowess to provide ingenious formulas for them.
                </div>
                <div class="values">
                <v-btn class="mx-2 value-btn" fab dark large color="rgb(0, 48, 91">
                    <v-icon dark>
                        mdi-clover
                    </v-icon>
                </v-btn>
                <span style="font-weight:bold;">Empathy</span><br/>
                We understand our client's problems as if they were our own and commit to resolving them with our constructive methods. 
                </div>
            </div>
          </div>
      </div>
      <div id="contact" class="strip5 wrapper">
        <div  class="sub-strip5 aside aside-1">
          <div class="strip-title5"><span style="letter-spacing:0.05em;">Contact Us</span></div>
        </div>
        <div  class="contact main">
            Our Address
            <div style="margin-top:1em;margin-bottom:1em;">
                11, Harman House, Goraswadi<br/>
                Near Thunga Hospital, Malad-West<br/>
                Mumbai - 400064
            </div>
            <div style="margin-bottom:1em;">Mob No.:&nbsp;+91 9594178988</div>
            <div style="font-weight:50;margin-bottom:1em;font-size:1em;text-decoration:underline;cursor:pointer" @click="goToMap()">Click here to find us</div>
            <div style="font-weight:50;margin-bottom:1em;font-size:1em;">For any general inquiries, please fill in the following contact form:</div>
            
            <form action="mailto: rajat.shah@rssa.in" method="POST" class="contact-form" enctype="text/plain" @submit="validate">
              <div style="display:flex;flex-wrap:wrap;box-sizing:content-box">
                <div style="margin-right:1em">
                  First Name*
                  <v-text-field name="First Name" :rules="[rules.name]" required outlined background-color="#ffff" v-model="profile.firstName"></v-text-field>
                  Last Name*
                  <v-text-field name="Last Name" :rules="[rules.name]" required outlined background-color="#ffff" v-model="profile.lastName"></v-text-field>
                  Phone No*
                  <v-text-field name="Phone No" :rules="[rules.phnumber]" required outlined background-color="#ffff" v-model="profile.phno"></v-text-field>
                </div>
                <div>
                  Message*
                  <v-textarea name="Message" required outlined background-color="#ffff" height="17.3em" v-model="profile.message"></v-textarea>
                </div>
              </div>
              <v-btn type="submit" class="submit-btn" outlined tile >Sumbit</v-btn>
            </form>
            
        </div>
      </div>
      <a href="#top"><div class="strip6">Back to top</div></a>
    </div>
</template>
<script>
export default {
    name:"MainSite",
    data(){
        return{
            accordion:false,
            profile:{firstName:null,lastName:null,phno:null,message:null},
            error:[],
            rules: {
                required: value => !!value || 'Required.',
                phnumber: value => {
                    const pattern = /[0-9]$/
                    return (pattern.test(value)&&value.length==10) || 'Invalid Phone number.'
                },
                name: value =>{
                    const pattern = /[A-Za-z]$/
                    return (pattern.test(value)) || 'Invalid Name.'
                }
            },
        }
    },
    methods:{
    goToMap(){
      this.$router.push({name:'Location'})
    },
    validate:function (e) {
        const pattern1 = /[0-9]$/
        const pattern2 = /[A-Za-z]$/
        if(pattern1.test(this.profile.phno)&&pattern2.test(this.profile.firstName)&&pattern2.test(this.profile.lastName))
            return true;
        e.preventDefault();
      },
    }

};
</script>
<style>
.main-site{
    font-size: 32px;
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
  top:0;
  left:0;
  background-color: rgb(0, 48, 91);
  display:flex;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
}
.strip-title{
  font-size: 1em;
  color: rgb(255, 255, 255);
  margin-left: 1em;
}
.strip2{
  display:flex;
  width:100%;
  position: relative;
}

.sub-strip2{
  position:relative;
  top:0;
  left:0;
  background-color: rgb(234,244,246);
  display:flex;
  align-items: flex-start;
  justify-content: center;

}
.strip-title2{
  font-size: 1em;
  color: rgb(0, 48, 91);
  margin-left: 1em;
  padding-top:1.5em;
  padding-bottom: 1.5em;
}
.about-us{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 0.5em;
  /* font-weight: 100; */
  color:  rgb(0, 48, 91);
  text-align: left;
  padding:1.5em;
  box-sizing: border-box;
  line-height: 1.5;
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
  font-size: 0.5em;
  
}
.values{
    display:grid;
    justify-items: center;
    text-align: center;
    margin:0.5em;
    width:50%
}
.value-btn{
    margin:0.5em;
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
  font-size: 1em;
  color: rgb(255, 255, 255);
  margin-left: 1em;
  padding-top:1.5em;
  padding-bottom: 1.5em;
}
.contact{

  position: relative;
  font-size: 0.5em;
  background-color:rgb(31, 86, 137);
  text-align: left;
  opacity: 0.85;
  padding-left: 1em;
  padding-top: 2em;
  color: #fff;
  box-sizing: border-box;
  padding-bottom: 1.5em;
}
.contact-form{
  color:white;
  font-size: 0.8em;
}
.background{
  background-color: rgb(12, 38, 107); 
}
.v-input__slot{
  width: 20em !important;
  
}
.submit-btn{
  color:white !important;
  width:100% !important;
  font-size:1em !important;
}
.strip6{
    background-color:rgb(0, 48, 91) ;
    color: white !important;
    font-size:1em;
    opacity: 0.85;
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
    font-size:1em !important;
}
.v-expansion-panel-content{
    font-weight: 100 !important;
}
.v-expansion-panel{
        color: rgb(0, 48, 91)  !important;
        margin-bottom: 0.5em;

}
.v-expansion-panels{
    z-index: 0;
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