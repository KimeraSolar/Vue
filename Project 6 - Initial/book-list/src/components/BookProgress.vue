<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps(['books']);

const booksRead = computed( () => {
    return props.books.filter((book: { isRead: boolean; }) => book.isRead).length;
})
</script>

<template>
    <div class="books-read">
        <label for="progress">Seu progresso</label>
        <progress :value="booksRead" :max="books.length"></progress>
        <p>{{`${booksRead} de ${books.length} livros lidos`}}</p>
        <p v-if="booksRead >= books.length">Parabéns! Você leu todos os livros</p>
        <p v-else class="transparent-text">Você ainda não leu todos os livros</p>
    </div>
</template>

<style lang="css" scoped>

.books-read{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>