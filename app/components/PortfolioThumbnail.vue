<template>
    <el-card shadow="hover" :body-style="{padding: '0px'}">
        <div @mouseover="activeModal(true)" @mouseleave="activeModal(false)">
            <img :src="portfolio.thumbnail.imgsrc" :alt="portfolio.title" width="300px">
            <transition name="view-title">
                <div v-if="viewTitle" class="overlay">
                    <h2>{{ portfolio.title }}</h2>
                    <h3>{{ portfolio.genre }}</h3>
                </div>
            </transition>
        </div>
    </el-card>
</template>

<script>
export default{
    name: "PortfolioThumbnail",
    props: [ "portfolio" ],
    data: function(){
        return {
            viewTitle: false
        };
    },
    methods: {
        activeModal: function(b){
            this.viewTitle = b;
        }
    }
};
</script>

<style scoped>
.el-card{
    background-color: rgba(53, 53, 53, .05);
    margin: 0 auto;
    width: 300px;
    
    position: relative;

    border: none;
}

.el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 1);
}

img {
    position: relative;
    top: 0;
    left: 0;
    
    display: block;
}

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(53, 53, 53, .8);
    color: #9FE6FD;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
}

h2{
    margin: 3px 0;
}

h3{
    font-weight: 400;
    color: #FFFAFA;
}

.view-title-enter-active, .view-title-leave-active{
    transition-property: opacity;
    transition-duration: .5s;
}

.view-title-enter, .view-title-leave-to{
    opacity: 0;
}
</style>