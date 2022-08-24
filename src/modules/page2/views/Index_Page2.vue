<template>
    <div>
        Test Page 2
        <ul>
            <li v-for="data in datas" :key="data.id">
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Index_Page2",
    data(){
        return{
            datas:[]
        }
    },
    created(){
        this.datas = this.$store.state.page1.items;
    }
    ,
}
</script>

<style>

</style>