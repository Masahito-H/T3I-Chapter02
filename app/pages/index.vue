<template>
    <article class="container">
        <TheTopCanvas id="the-top-canvas" />
        <h1 id="title">
            <span class="v-blank">The Three Interactions</span><br />
            Chapter 02
            <br /> Vue.js / Nuxt.js
            <br />+ p5.js + <span class="v-blank"><button ref="pdstart" id="pure-data">Pure Data</button></span>
        </h1>
    </article>
</template>

<script>
import TheTopCanvas from "~/components/TheTopCanvas.vue";
import { mapGetters } from "vuex";

export default {
    name: "index",
    components: {
        TheTopCanvas
    },
    async asyncData({ app, store }){
    //warning: if this site will be deployed, I must change the above address.
    const pdFile = await app.$axios.$get("https://a28cdfc3214a41cab37e3c7db9ef244b.vfs.cloud9.ap-northeast-1.amazonaws.com/chapter2-0.pd");
    console.log(pdFile);
    store.dispatch("isLoading", false);
    
    return { pdFile };
    },
    computed: {
        ...mapGetters(["isLoading", "ms"])
    },
    watch: {
        ms: function(oldVal, newVal){
            Pd.send("xValue", [newVal.x]);
            Pd.send("yValue", [newVal.y]);
        }
    },
    mounted: function(){
        Pd.loadPatch(this.pdFile);
        //Pd.start();
        Pd.startOnClick(this.$refs.pdstart, null, {});
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
}

#title .v-blank{
    line-height: 2;
}

#title #pure-data{
    cursor: pointer;
}
</style>