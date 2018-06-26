<template>
    <div>


        <div tabindex="0" class="md-dialog-container md-theme-default md-active">

            <div class="md-dialog md-reference">
                <div class="md-dialog-title md-title"> Do you want delete this {{words.captions}}?</div>
                <div class="md-dialog-content">
                </div>

                <div class="md-dialog-actions">
                    <md-button class="md-primary" @click="closeDialog()">Cancel</md-button>
                    <md-button class="md-primary" v-if="words.station" @click="deleteStation()">Delete</md-button>
                    <md-button class="md-primary" v-if="words.user" @click="deleteUser()">Delete</md-button>
                    <md-button class="md-primary" v-if="words.client" @click="deleteClient()">Delete</md-button>

                </div>
            </div>
            <div class="md-backdrop md-dialog-backdrop md-active"></div>
        </div>


    </div>

</template>

<script>

    import vSelect from './Select.vue'

    export default {

        components: {vSelect},
        name: 'popup-delete',

        data() {
            return {
                item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
                items: [],
                initialValue: 'My initial value',
                checkbox: true,
                autocompleteValue: '',
                words: this.$parent.words_delete,
                selected: [],
                selected_obj: [],
                selected_id: [],


            }
        },
        methods: {


            closeDialog() {
                this.$parent.modalDelete = false
            },
            deleteStation() {
                this.$parent.$refs.topProgress.start()
                this.$parent.words_delete = {};
                let self = this;
                this.$http.delete(this.$parent.base_url + 'station/' + this.words.obj.id,
                    {headers: {'Authorization': 'Bearer ' + this.$cookies.get("token")}}).then(
                    function (response) {
                        this.$parent.$refs.topProgress.done()
                        this.$parent.success = true
                        this.$parent.event = 'delete';
                    }, function (error) {
                        this.$parent.error = true
                        this.$parent.$refs.topProgress.fail()
                    }
                );
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
                this.$parent.modalDelete = false

            }, deleteUser() {
                this.$parent.$refs.topProgress.start()
                this.$parent.words_delete = {};
                this.$parent.success = true
                let self = this;
                this.$http.delete(this.$parent.base_url + 'user/' + this.words.obj.id,
                    {headers: {'Authorization': 'Bearer ' + this.$cookies.get("token")}}).then(
                    function (response) {
                        this.$parent.success = true
                        this.$parent.event = 'delete_user';
                        this.$parent.$refs.topProgress.done()

                    }, function (error) {
                        this.$parent.error = true
                        this.$parent.$refs.topProgress.fail()
                        console.log(error)
                    }
                );
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
                this.$parent.modalDelete = false

            },
            deleteClient() {
                this.$parent.$refs.topProgress.start()
                this.$parent.words_delete = {};
                this.$parent.success = true
                let self = this;
                this.$http.delete(this.$parent.base_url + 'client/' + this.words.obj.id,
                    {headers: {'Authorization': 'Bearer ' + this.$cookies.get("token")}}).then(
                    function (response) {
                        this.$parent.success = true
                        this.$parent.event = 'delete_client';
                        this.$parent.$refs.topProgress.done()

                    }, function (error) {
                        this.$parent.error = true
                        this.$parent.$refs.topProgress.fail()
                        console.log(error)
                    }
                );
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
                this.$parent.modalDelete = false

            },

        },
        created() {


        },
        computed: {}


    }

</script>

<style>


</style>
