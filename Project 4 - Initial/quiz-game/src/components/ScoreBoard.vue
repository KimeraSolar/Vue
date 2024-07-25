<script setup>

</script>

<script>
export default {
    props: {
        win_count: Number,
        total_score: Number
    }
}
</script>

<template>
    <div class="score-container">
        <h2 v-if="!total_score">Select the correct answer and click the "send" button!</h2>
        <h2 v-if="total_score">You answered <span v-html="win_count"></span> out of <span v-html="total_score"></span> questions correctly!</h2>
    </div>
</template>

<style scoped>
.score-container{
    width: fit-content;
    margin: 0 auto;
}
</style>