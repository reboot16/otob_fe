<template>
    <transition name="modal">
        <modal @close="close"> 
            <div slot="modal-header"> 
                Product
            </div>

            <div slot="modal-body">
                Hahahah
            </div>

            <div slot="modal-footer">
                Hahahah
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
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script> 

<style>

</style>

