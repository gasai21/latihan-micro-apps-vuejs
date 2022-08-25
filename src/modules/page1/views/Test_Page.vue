<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #e3f2fd;">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container">
            <!-- <b-button variant="success" @click="addValue">Add Value</b-button>
            <br><br>
            <b-button variant="info" @click="gotopage2">Go to page2</b-button> -->

            <div class="row">
                <div class="col-md-4" style="margin-top:10px;margin-bottom: 10px;" v-for="data in products" :key="data.id">
                    <div class="card" style="width: 100%;">
                        <img :src="data.image" class="card-img-top" alt="..." width="100%" height="300px">
                        <div class="card-body">
                            <p class="card-text">{{ data.title }}</p>
                            <i>{{ data.category }}</i> <br>
                            <b>${{ data.price }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions, mapState } from 'vuex'

export default {
    name: 'TestPage',
    data(){
        return {
            dataProducts:[]
        }
    },
    created(){
        // this.GET_DATA_API();

        // this.$store.dispatch('page1/getDataApi');
        // this.dataProducts = this.$store.state.page1.products;
    },
    computed:{
        ...mapState([
            'products',
        ]),
        products(){
            return this.$store.state.page1.products;
        }
    },
    updated(){
        // this.$store.dispatch('page1/getDataApi');
        // this.dataProducts = this.$store.commit('page1/GET_DATA_PRODUCTS');
    },
    mounted(){
        // this['page1/getDataApi']();
        // this.$store.dispatch('page1/getDataApi');
        // this.dataProducts = this.$store.state.page1.products;
        // this.dataProducts = this.$store.getters.getProducts;

        // this.dataProducts = this.$store.dispatch('page1/getDataApi');

        // this.getDataAPI();



        // this.dataProducts = this.products;

        this.$store.dispatch('page1/getDataApi');
    },
    methods:{
        gotopage2(){
            this.$router.push('/page2');
        },
        addValue(){
            this.$store.commit('page1/ADD_ITEM', "data");
            console.log("Berhasil");
        },
        // ...mapActions(["page1/getDataApi"]),
        getDataAPI(){
            // this.$store.commit('page1/GET_DATA_API');

            // console.log(this.$store.commit('page1/GET_DATA_API'));

            // this.$store.dispatch('page1/GET_DATA_API');


            // this.dataProducts = this.$store.commit('page1/GET_DATA_PRODUCTS');

            this['page1/getDataApi']();

            // this.dataProducts = this.$store.state.page1.products;

            // console.log(this.dataProducts);
        },
        // ...mapActions([
        //   'page1/getDataApi'
        // ])
    }
}
</script>

<style>

</style>