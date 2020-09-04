<template>
    <div class="menu-layout">
        <el-menu  defailt-active="1" background-color="#353535" text-color="#9FE6FD" :collapse="menuCollapse" :collapse-transition="true">
            <nuxt-link to="/">
                <el-menu-item @click="() => {topView(true); topCanvas(true);}" index="1">TOP</el-menu-item>
            </nuxt-link>
            <nuxt-link to="/about">
                <el-menu-item @click="() => {topView(false); topCanvas(false);}" index="2">ABOUT</el-menu-item>
            </nuxt-link>
            <nuxt-link to="/works">
                <el-menu-item @click="() => {topView(false); topCanvas(false); closeDetail();}" index="3">WORKS</el-menu-item>
            </nuxt-link>
            <a href="https://t3i-chapter01-prototype.netlify.app">
                <el-menu-item index="4">
                    Chapter 01<br />
                    jQuery
                </el-menu-item>
            </a>
            <a href="https://t3i-chapter03-prototype.netlify.app">
                <el-menu-item index="5">
                    Chapter 03<br />
                    React
                  </el-menu-item>
            </a>
        </el-menu>
        <div id="element-button">
            <el-button @click="menuSwitch" type="primary" icon="el-icon-menu">MENU</el-button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default{
    name: "TheMenu",
    data: function(){
        return {
            menuCollapse: true
        };
    },
    computed: {
        ...mapGetters(["isSelectTop", "isShowDetail"])
    },
    methods: {
        menuSwitch: function(){
            this.menuCollapse = !this.menuCollapse;
        },
        topView: function(b){
            this.isTop(b);
        },
        topCanvas: function(b){
            this.isCanvas(b);
        },
        closeDetail: function(){
            this.isDetail(false);
        },
        ...mapActions(["isTop", "isCanvas", "isDetail"])
    },
    mounted: function(){
        this.menuCollapse = this.isSelectTop;
    }
};
</script>

<style scoped>
a{
    text-decoration: none;
}

.menu-layout{
    display: flex;
    justify-content: flex-start;
}

.el-menu{
    height: 100vh;
    width: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border: none;
    overflow: hidden;
}

.el-menu:not(.el-menu--collapse){
    width: 25vw;
}

.el-menu-item{
    height: auto;

    font-size: 20px;
    line-height: 1.2em;
    padding: 28px 0;
}

#element-button{

}

#element-button .el-button{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
