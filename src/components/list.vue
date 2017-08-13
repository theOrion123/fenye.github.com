<template>
    <ol>
        <li v-for="(news,index) in list">
            <p class="title">{{ news.title }}</p>
            <p class="date">{{ news.create_at }}</p>
            <p class="author">By: {{ news.author.loginname }}</p>
        </li>
    </ol>
</template>
<script>
const domain = 'https://cnodejs.org/api/v1/topics';
export default{
    data () {
        return {
            list: [],
            limit: 10
        }
    },
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    mounted () {
        this.get()
    },
    watch: {
        page (val) {
            this.get()
        }
    },
    methods: {
        get () {
            console.log(this.page,this.limit)
            var self=this;
            this.$http.get(domain+'?page='+self.page+'&limit='+self.limit,{
                //page: self.page,
                //limit: self.limit
            }).then(function(d){
                d.data.data.forEach((data) => {
                    const d = new Date(data.create_at)
                    data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                });
                //self.list=self.list.concat(d.data.data);
                self.list=d.data.data;
            })
        }
    }
}
</script>
<style scoped>
    ol {
        margin:.2rem;
        list-style: outside decimal;
    }
    li {
        line-height: 1.1;
        border-bottom: 1px solid #b6b6b6;
        padding:.2rem;
    }
    li>p{ line-height: .5rem;}
    .title {
        font-weight: bold;
        font-size: .38rem;
    }
    .date {
        font-size: .38rem;
        color: #d6d6d6;
    }
</style>
