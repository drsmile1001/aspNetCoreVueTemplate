<template>
    <div>
        <h1>aaa</h1>
        {{count}}
        <button class="btn btn-default"
                @click="plus">+1</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        plus(){
            this.count += 1;
        }
    }
}
</script>

<style>

</style>
