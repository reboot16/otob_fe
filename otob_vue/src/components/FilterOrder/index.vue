<template>
    <div class="table">
        <div class="input-group">
            <b-form-select
                    v-model="status"
                    placeholder="Cari berdasarkan status">
                <option value="waiting">Waiting</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </b-form-select>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                status: ''
            }
        },
        methods: {
            doFilter () {
                this.$emit('doFilter', this.status)
            }
        }
    }
</script>

<style scoped>

    .input-group {
        margin-top: 10px;
    }
    .input-group-append button{
        margin-left:0;padding:0.25em
    }
    .table {
        margin: auto;
        margin-top: 10px;
        max-width: 100%;
        padding: 10px;
    }
</style>