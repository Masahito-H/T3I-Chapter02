<template>
    <section id="my-intro-section">
        <h1 class="text-centre">ABOUT</h1>
        <div id="my-intro-head">
            <img src="src/la.png" width="225px">
            <h2 class="member-name">Masahito H.</h2>
        </div>
        <div id="my-intro-desc">
            <p>法政大学情報科学部ディジタルメディア学科卒業</p>
            <p>
                ジェネラティブアートと視線誘導に関する学士論文を執筆。<br />
                他、大学の音楽サークルにてVJ、CDジャケットのデザインの経験を持つ。<br />
                現在、Webエンジニア（フロントエンドエンジニア）に向けて勉強中。
            </p>

            <h3 class="member-skill">取得資格</h3>
            <p>
                基本情報技術者試験<br />
                TOEIC IPテスト スコア605
            </p>

            <h3 class="member-skill">プログラミングスキル</h3>
            <p>C++(openFrameworks) / Java / Processing /<br /> javascript(jQuery, Vue.js, Nuxt.js, p5.js, React, three.js, Howler.js) / Python / etc..</p>
        </div>
    </section>
</template>

<script>
export default{
    name: "about"
};
</script>

<style scoped>
#my-intro-section{
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
}

#my-intro-head{

}

#my-intro-head .member-name{

}

#my-intro-desc{
    margin: 12px;
    overflow-y: auto;
}

#my-intro-desc .member-skill{

}

#my-intro-desc p{
    margin: 10px 0 10px;
}
</style>
