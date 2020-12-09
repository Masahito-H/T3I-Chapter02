<template>
    <article class="container">
        <TheTopCanvas id="the-top-canvas" v-show="isShowCanvas" />
        <h1 id="title" :class="{'move-title': moveTitle}">
            <span class="v-blank">The Three Interactions</span><br />
            Chapter 02
            <br /> Vue.js / Nuxt.js
            <br />+ p5.js + <span class="v-blank"><button ref="pdstart" id="pure-data">Pure Data</button></span>
        </h1>
        <div id="main-components">
            <TheMenu id="the-menu" />
            <div id="content-area" v-show="!isSelectTop">
                <nuxt-child />
            </div>
        </div>
    </article>
</template>

<script>
import TheTopCanvas from "~/components/TheTopCanvas.vue";
import TheMenu from "~/components/TheMenu.vue";
import { mapGetters, mapActions } from "vuex";

export default {

    name: "index",
    head(){
      return {
        title: "Chapter02 Vue.js"
      };
    },
    components: {
        TheTopCanvas,
        TheMenu
    },
    async asyncData({ app, store }){
        //const path = require("path");
        const pdFile = await app.$axios.$get(`${location.protocol}//${location.host}/chapter2-0.pd`);
        console.log(pdFile);
        store.dispatch("isLoading", false);
        return { pdFile };
    },
    data: function(){
        return {
            moveTitle: false
        };
    },
    computed: {
        ...mapGetters(["isLoading", "ms", "isShowCanvas", "isSelectTop"])
    },
    methods: {
        ...mapActions(["isTop", "isCanvas", "isDetail"])
    },
    watch: {
        ms: function(oldVal, newVal){
            Pd.send("xValue", [newVal.x]);
            Pd.send("yValue", [newVal.y]);
        }
    },
    beforeMount: function(){
        if(this.$route.path === "/"){
            this.isTop(true);
            this.isCanvas(true);
        }
        else{
            this.isTop(false);
            this.isCanvas(false);
        }
    },
    mounted: function(){
        Pd.loadPatch(this.pdFile);
        Pd.startOnClick(this.$refs.pdstart, null, {});
        /*
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.$nuxt.$loading.finish();
            }, 500);
        });
        */
    }
};
</script>

<style scoped>
.container{
    justify-content: left;
}

#the-top-canvas{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

#title{
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    font-size: 70px;
    color: #fffafa;

    text-align: left;

    padding-left: min(80px, calc(10vw - 40px));

    transition: left .5s;
}

.move-title{
    left: 25vw;
}

#title .v-blank{
    line-height: 2;
}



#title #pure-data{
    cursor: pointer;
}

#main-components{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    /*height: 100vh;*/
}

#main-components #the-menu{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;

    z-index: 3;
}

#main-components #content-area{
    position: absolute;
    width: 75vw;
    height: 100vh;
    top: 0;
    right: 0;

    background-color: rgba(53, 53, 53, .8);
    color: #FFFAFA;

    z-index: 1;
}
</style>
