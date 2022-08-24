/* eslint-disable */
<template>
    <div>
        Test
        <div>
            <b-button variant="success" @click="addValue">Add Value</b-button>
            <br><br>
            <b-button variant="info" @click="gotopage2">Go to page2</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestPage',
    methods:{
        gotopage2(){
            this.$router.push('/page2');
        },
        addValue(){
            this.$store.commit('page1/ADD_ITEM', "data");
            console.log("Berhasil");
        }
    }
}
</script>

<style>

</style>