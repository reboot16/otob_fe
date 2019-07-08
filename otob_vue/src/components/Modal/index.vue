<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-container"> 
                <div class="modal-header">
                    <img id="imgModal" src="@/assets/blibli.jpeg"> 
                    <slot name="modal-header"> Default Title</slot>
                    <button type="button" class="btn-close" @click="close"> x </button>
                </div>

                <div class="modal-body">
                    <slot name="modal-body"> Default Body </slot>
                </div>

                <div class="modal-footer">
                    <slot name="modal-footer"> Default Footer </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    data () {
        return {
        }
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


