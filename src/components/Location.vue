<template>
<div class="map-background">
<div class="map-location">
     Our Address
            <div style="margin-top:1em;margin-bottom:1em;">
                11, Harman House, Goraswadi<br/>
                Near Thunga Hospital, Malad-West<br/>
                Mumbai - 400064
            </div>
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe style="width:-webkit-fill-available;" width="" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Goraswadi,%20Near%20Thunga%20Hospital,%20Malad-West,%20Mumbai%20-%20400064&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    name:'Location'
}
</script>
<style scoped>
.map-background{
    width:100vw;
    background-color: rgb(234,244,246);
    height: 130vh;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
}
.map-location{
    color: rgb(0, 48, 91);
    position: relative;
    top:4.8em;
    text-align: center;
    width: 80%;
    font-size: 0.7em;
}
.mapouter{
    position:relative;
    text-align:right;
    height:500px;
    /* width:100vw; */
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    /* width:100vw; */
}

</style>