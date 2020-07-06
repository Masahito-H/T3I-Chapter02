<template>
    <section class="section-class">
        <div>
            <h1 class="text-centre">WORKS</h1>
            <div id="works-filter" v-if="!isShowDetail">
                <h2>FILTER</h2>
                <div id="filter-buttons">
                    <button v-for="(value, index) in filterGenre" :class="{'active-button': initWrap(!value.filt) }" @click="switchingFilter(index)">{{value.genre}}</button>
                </div>
            </div>
        </div>
        
        <div id="works-list-wrap" v-show="!isShowDetail">
            <transition-group id="works-list" tag="div" name="list">
                <div v-for="(port, index) in workList" :key="port.id" v-show="filterGenre[getFilterIndex(port.genre)].filt" @click="detailActive(port)">
                    <nuxt-link :to="'/works/' + index">
                        <PortfolioThumbnail :portfolio="port"/>
                    </nuxt-link>
                </div>
            </transition-group>
        </div>
        
        <transition name="detail">
            <div v-if="isShowDetail" id="portfolio-detail">
                <nuxt-child :portfolio="detailList" />
            </div>
        </transition>
    </section>
</template>

<script>
import PortfolioThumbnail from "~/components/PortfolioThumbnail.vue";
import { mapGetters, mapActions } from "vuex";

export default{
    name: "works",
    components: {
        PortfolioThumbnail
    },
    data: function(){
        return {
            workList: require("~/assets/portfolioData.json"),
            detailList: {},
            initFilter: true,
            filterGenre: [
                {
                    genre: "Web",
                    filt: true
                },
                {
                    genre: "Application",
                    filt: true
                },
                {
                    genre: "Graphic/Movie",
                    filt: true
                },
                {
                    genre: "Other",
                    filt: true
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["isShowDetail"])
    },
    methods: {
        detailActive: function(lst){
            this.detailList = lst;
            this.isDetail(true);
        },
        switchingFilter: function(i){
            let allTrue = this.filterGenre.every((value) => {
                return value.filt;
            });
            
            if(allTrue && this.initFilter){
                this.filterGenre.forEach((value) => {
                   value.filt = false; 
                });
                this.initFilter = false;
                this.filterGenre[i].filt = true;
            }
            else{
                this.filterGenre[i].filt = !this.filterGenre[i].filt;
                
                let allFalse = this.filterGenre.every((value) => {
                    return !value.filt;
                });
                if(allFalse){
                    this.filterGenre.forEach((value) => {
                        value.filt = true;
                    });
                    this.initFilter = true;
                }
            }
        },
        initWrap: function(filt){
            return this.initFilter ? true : filt;
        },
        getFilterIndex: function(genreStr){
            switch(genreStr){
                case "Web":
                    return 0;
                case "Application":
                    return 1;
                case "Graphic":
                case "Movie":
                    return 2;
                default:
                    return 3;
            }
        },
        ...mapActions(["isDetail"])
    },
    beforeMount: function(){
        if(this.$route.path.substring(0, 7) === "/works/"){
            let ind = parseInt(this.$route.path.substring(7, 8));
            this.detailList = this.workList[ind];
            this.isDetail(true);
        }
    }
};
</script>

<style scoped>
.section-class{
    display: grid;
    margin: 0;
    height: 100vh;
    
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
}

#works-filter{
    padding: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 50%;
    transform: translateX(50%);
    left: 50%;
    
    background-color: #353535;
}

h2{
    margin-bottom: 10px;
    font-size: 30px;
    
}

#works-filter #filter-buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#works-filter #filter-buttons button{
    padding: .5em;
    margin: 0 7px;
    background-color: #FFFAFA;
    color: #353535;
    border: 1px solid;
    
    cursor: pointer;
}

#works-filter #filter-buttons .active-button{
    background-color: #353535;
    color: #FFFAFA;
}

#works-list-wrap{
    display: block;
    margin: 0;
    margin-left: 8px;
    padding: 30px 0;
    
    overflow-y: auto;
}

#works-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px 5px;
}

#works-list a{
    text-decoration: none;
}

#portfolio-detail{
    position: relative;
    top: 0;
}

.list-enter-active, .list-leave-active{
    transition: opacity .5s;
}

.list-enter, .list-leave-to{
    opacity: 0;
}

.list-move{
    transform: transition .5s;
}


.detail-enter-active, .detail-leave-active{
    transition-property: top opacity;
    transition-duration: .01s;
}

.detail-enter, .detail-leave-to{
    top: 50%;
    opacity: 0;
}
</style>