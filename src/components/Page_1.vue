<template>
    <div>

        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Поиск по автору.."/>
            <label>Поиск по автору:</label>
        </div>

        <div class="fond"> <span class="s1">цитатник </span><span class="s2">рецептов</span></div>

        <div class="card" v-for="(item,key) in filteredList">
            <div class="thumbnail"><img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
            <div class="right">
                <h1 v-html="item.name"></h1>
                <div class="separator"></div>
                <p v-html="item.description"></p>
                ID рецепта: {{item.id}} <br>
                <button @click="reading(item)">Редактировать</button>
                <button @click="deletes(key)">Удалить</button>

            </div>
            <span v-html="$options.filters.dateFil(item.date)"></span>
            <span class="author">Автор: {{item.author}}</span>
        </div>



    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    data() {
        return {
                items:[],
                search:""
        }
    },
    created() {
        this.items = JSON.parse(localStorage["save"]);
    },
    computed: {
        filteredList() {
            return this.items.filter(post => {
                return post.author.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        reading(item){
            this.$router.push({ name: 'Page_reading', params: item});
        },
        deletes(key){

            var isdele = confirm("Удалить рецепт?");

            if(!isdele){
                return;
            }

            this.items.splice(key,1);

            localStorage["save"] = JSON.stringify(this.items);
        }
    },
    filters: {
        dateFil(date){
            var arr=[
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Ноябрь',
                'Декабрь',
            ];
            return "<h5>"+new Date(date).getDate()+"</h5> <h6>"+arr[new Date(date).getMonth()]+"</h6>";
        }
    }
});
</script>

<style>
    .search-wrapper {
        position: absolute;
        z-index:100;
        top:100px;
        left:100px;
    }
    .search-wrapper label {
        position: absolute;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        top: 8px;
        left: 12px;
        z-index: -1;
        transition: .15s all ease-in-out;
    }
    .search-wrapper input {
        padding: 4px 12px;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.12);
        transition: .15s all ease-in-out;
        background: white;
    }
    .search-wrapper input:focus {
        outline: none;
        transform: scale(1.05);
    }
    .search-wrapper input:focus + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
    }
    .search-wrapper input::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
    }

    span.s1 {
        position: absolute;
        top: 0;
        font-size: 11rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #3C4447;
    }

    span.s2 {
        font-weight: 800;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 11rem;
        text-transform: uppercase;
        color: #3C4447;
    }


    /* The card */
    .card {
        position: relative;
        height: 450px;
        width: 900px;
        margin: 200px auto;
        background-color: #FFF;
        -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    }

    /* Image on the left side */
    .thumbnail {
        float: left;
        position: relative;
        left: 30px;
        top: -30px;
        height: 320px;
        width: 530px;
        -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        overflow: hidden;
    }

    /*object-fit: cover; */
    /*object-position: center; */
    img.left {
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        width: 100%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    /* Right side of the card */
    .right {
        margin-left: 590px;
        margin-right: 20px;
    }

    h1 {
        padding-top: 15px;
        font-size: 1.3rem;
        color: #4B4B4B;
    }

    h2 {
        padding-top: 8px;
        margin-right: 6px;
        text-align: right;
        font-size: 0.8rem;
    }

    .separator {
        margin-top: 10px;
        border: 1px solid #C3C3C3;
    }

    p {
        text-align: justify;
        padding-top: 10px;
        font-size: 0.95rem;
        line-height: 150%;
        color: #4B4B4B;
        word-wrap: break-word;
        overflow: hidden;
        height:200px;

    }

    /* DATE of release */
    h5 {
        position: absolute;
        left: 30px;
        bottom: -120px;
        font-size: 6rem;
        color: #C3C3C3;
    }

    h6 {
        position: absolute;
        left: 30px;
        bottom: -55px;
        font-size: 2rem;
        color: #C3C3C3;
    }
    .author{
        position: absolute;
        right: 20px;
        bottom: 20px;
    }

    /* Those futur buttons */
    ul {
       padding:10px;
    }

    li {
        list-style: none;
        text-align:left;
        color: #7B7B7B;
        font-size: 16px;
        font-weight: 600;
    }



</style>