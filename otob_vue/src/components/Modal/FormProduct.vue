<template>
    <transition name="modal">
        <modal @close="close"> 
            <div slot="modal-header"> 
                Tambah Product
            </div>

            <div slot="modal-body">
                <b-form ref="form" @submit.prevent="onSubmit" style="text-align:left" >
                    <b-row>
                        <b-col sm="3"><label>Nama</label></b-col>
                        <b-col sm="9">
                        <b-form-input v-model="form.name" placeholder="Masukkan nama produk" required></b-form-input>
                        </b-col>
                    </b-row><br>
                    <b-row>
                        <b-col sm="3"><label >Deskripsi</label></b-col>
                        <b-col sm="9">
                        <b-form-textarea v-model="form.description" rows="3" placeholder="Deskripsi produk" required></b-form-textarea>
                        </b-col>
                    </b-row><br>
                    <b-row>
                        <b-col sm="3"><label >Harga Awal</label></b-col>
                        <b-col sm="9">
                        <b-form-input v-model="form.listPrice" placeholder="0" type="number" required></b-form-input>
                        </b-col>
                    </b-row><br>
                    <b-row>
                        <b-col sm="3"><label >Harga Akhir</label></b-col>
                        <b-col sm="9">
                        <b-form-input v-model="form.offerPrice" placeholder="0" type="number" required></b-form-input>
                        </b-col>
                    </b-row><br>
                    <b-row>
                        <b-col sm="3"><label >Stok</label></b-col>
                        <b-col sm="9">
                        <b-form-input v-model="form.stock" placeholder="0" type="number" required></b-form-input>
                        </b-col>
                    </b-row><br>
                    <div id="r_button">
                        <b-button type="submit" variant="success" style="width:100%">
                            Tambah Product
                        </b-button>  
                    </div>
                    </b-form>
            </div>

            <div slot="modal-footer">
                <button @click="onReset"> Reset </button> 
            </div>

        </modal> 
    </transition>
</template>

<script>
import Modal from '@/components/Modal'

export default {
    name: 'modal-product',
    components: { 
        Modal
    },
    props: {
        objProduct: Object
    },
    data() {
        return { 
            form: {
                name: '',
                description: '',
                listPrice: '',
                offerPrice: '',
                stock: ''
            },
        }
    }, 
    methods: {
        close () {
            this.$emit('close');
            this.onReset()
        },
        onSubmit () {
            this.$store.dispatch('addProduct', this.form)
            this.close()
        },
        onUpdate () {
            this.$store.dispatch('updateProduct', this.form)
            this.close()
        },
        onSet (product) {
            this.$refs.form = product
        },
        onReset () {
            this.$refs.form.reset()
        }
    },
}
</script> 

<style>

</style>

