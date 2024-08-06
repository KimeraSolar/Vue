<script lang="ts" setup>

const props = defineProps(['books']);
const emits = defineEmits(['toggleIsRead', 'removeBook']);

</script>

<template>

    <div class="books-list">
        <div v-for="book in books" :key="book.isbn" class="book">
            <div class="readIt" v-if="book.isRead">
                <i class="fa-solid fa-eye"></i>
            </div>
            <div class="book-cover">
                <img :src="book.cover" onerror="this.src='https://www.mobileread.com/forums/attachment.php?attachmentid=111307&d=1378926764'"/>

                <button @click="$emit('toggleIsRead', book.id)" :class="book.isRead && 'isRead'">
                    <i class="fa-solid fa-eye"></i>
                    <span>{{ book.isRead ? 'Já li' : 'Ainda não li' }}</span
                    >
                </button>
                </div>
                <div class="book-details">
                <p class="book-author">{{ book.author }}</p>
                <h3 class="book-title">{{ book.title }}</h3>
                <p><i class="fa-solid fa-hashtag icon"></i>{{ book.isbn }}</p>
                <button class="delete-button" @click="$emit('removeBook', book)">
                    Excluir da lista
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.delete-button{
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    border: none;
    width: fit-content;
    display: block;
    padding: 12px;
}
</style>