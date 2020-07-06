<template>
    <section>
        <div class="portfolio-grid">
            <div class="portfolio-head">
                <h2 class="text-centre">{{portfolio.title || dummy}}</h2>
                <h3 class="work-genre">{{portfolio.genre}}</h3>
            </div>
            <div class="portfolio-view">
                <iframe v-if="portfolio.thumbnail.isMovie" :src="portfolio.thumbnail.movsrc" scroll="no" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div v-else class="images">
                    <img v-for="imgs in portfolio.thumbnail.detailsrcs" :src="'../' + imgs" class="image-class" />
                </div>
            </div>
            <div class="portfolio-describe">
                <p v-if="portfolio.githubLink">
                    <a class="github-link" :href="portfolio.githubLink" target="_blank">
                        <span class="fab fa-github-square"></span>
                    </a>
                </p>
                <p class="language">{{portfolio.language}}</p>
                <div class="arbitrary-area" v-html="$sanitize(portfolio.describe)"></div>
            </div>
        </div>
        <div class="back-to-works" @click="detailActive">
            <nuxt-link to="/works">
                <span class="fas fa-times fa-5x"></span>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
import { mapActions } from "vuex";

export default{
    name: "work",
    props: [ "portfolio" ],
    data: function(){
        return {
            dummy: "Portfolio-Detail"
        };
    },
    methods: {
        detailActive: function(){
            this.isDetail(false);
        },
        ...mapActions(["isDetail"])
    }
};
</script>

<style scope>
.portfolio-grid {
    height: 90vh;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
}

.portfolio-grid .portfolio-head{
    padding-bottom: 10px;
}

.portfolio-grid .portfolio-head .text-centre{
    
}

.portfolio-grid .portfolio-head .work-genre{
    margin: 0 0 25px;
}

.portfolio-grid .portfolio-view{
    display: flex;
    justify-content: center;
    overflow-y: auto;
}

.portfolio-grid .portfolio-view iframe{
    width: 80%;
    height: 567px;
}

.portfolio-grid .portfolio-view .images{
    display: grid;
    margin: 15px;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    
}

.portfolio-grid .portfolio-view .images .image-class{
    max-width: 70%;
    margin: 0 auto;
    
}

.portfolio-grid .portfolio-describe p{
    margin: 15px 0 15px;
}

.portfolio-grid .portfolio-describe .language{
    margin-bottom: 8px;
}

.portfolio-grid .portfolio-describe p .github-link{
    color: #CCF;
    font-size: 30px;
    opacity: .5;
}

.portfolio-grid .portfolio-describe p .external-link{
    color: #CCF;
    text-decoration: none;
}

.portfolio-grid .portfolio-describe p .external-link:hover{
    text-decoration: underline;
}

.portfolio-grid .portfolio-describe .arbitrary-area{
    padding: 0;
    margin: 0;
}

.back-to-works{
    position: absolute;
    top: 0;
    right: 40px;
    
    display: inline-block;
}

.back-to-works span{
    color: #FFFAFA;
}
</style>