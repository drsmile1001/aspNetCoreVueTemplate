<template>
    <div>
        <h1>計數器</h1>
        <h2>{{count}}</h2>
        <v-btn @click="plus">+1</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        plus() {
            this.count += 1;
        }
    }
};
</script>

<style>
</style>
