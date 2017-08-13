<template>
    <div id="app">
        <router-link :to="'/page/'+this.page">
            <a class="button" @click="prev" >GO prev<span>CURRENT:{{page}}</span></a>
        </router-link>
        <router-link :to="'/page/'+this.page">
            <a class="button" @click="next" >GO NEXT<span>CURRENT:{{page}}</span></a>
        </router-link>
        <list :page="page"></list>
    </div>
</template>
<script>
    import List from './components/List'
    export default {
        components: {
            List
        },
        data () {
            return {
                page:parseInt(this.$route.params.pagenum)||1
            }
        },
        methods: {
            next () {
                this.page++
            },
            prev () {
                if(this.page<=1){
                    this.page=1;
                }else{
                    this.page--
                }
            }
        }
    }
</script>

<style>
    .button {
        display: block;
        background: #212121;
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: 1em;
        cursor: pointer;
        text-decoration: none;
    }
    .button span {
        margin-left: 2em;
        font-size: .5rem;
        color: #d6d6d6;
    }
</style>
