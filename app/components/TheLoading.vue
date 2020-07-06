<template>
    <transition name="loading">
        <div class="container" v-if="isLoading">
            <p>The Three Interactions</p>
        </div>
    </transition>
</template>

<script>
export default{
    name: "TheLoading",
    data: function(){
        return {
            isLoading: false
        };
    },
    methods: {
        start: function(){
            this.isLoading = true;
        },
        finish: function(){
            this.isLoading = false;
        }
    }
};
</script>

<style scoped>
.container{
    background-color: #fffafa;
    z-index: 0;
    width: 75vw;
    left: 25vw;
    
    z-index: 2;
}

.loading-enter-active, .loading-leave-active{
    transition: opacity .5s;
}

.loading-leave-to{
    opacity: 0;
}
</style>