<template>
    <div class="modalpage" v-if="show">
        <header class="m-page__header m-header m-header--blue">
            <div class="m-header__nav"></div>
            <div class="m-header__content">
                <span class="m-header__content--title">
        <!--          {{ pageTitle }}-->
                    Header
                </span>
            </div>
            <div class="m-header__nav close">
                <i class="m-header__icon m-header__icon--small bli-close m-header__nav--link" @click="closeModal">close</i>
            </div>
        </header>
<!--        <div class="fullpagemodal__content" v-bind:class="{'fullpagemodal__content&#45;&#45;noheader': hideHeader}">-->
<!--            <component ref="childComp" :is="view" v-bind="passedProps" v-on:on-close-modal="closeModal" :on-close="closeModal"></component>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: true,
            }
        },
        methods: {
            // openModal: function () {
            //     if (typeof this.view === 'undefined' || this.view === null || this.view === '') {
            //         return
            //     }
            //     this.show = true
            //     this.removeBodyScroll(true)
            // },
            closeModal: function () {
                this.show = false
                // this.view = null // trigger destroyed hook from component
                // this.removeBodyScroll(false)
            },
        }
    }
</script>
