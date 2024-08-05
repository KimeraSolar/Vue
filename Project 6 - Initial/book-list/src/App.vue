<script setup lang="ts">
import { reactive, ref } from 'vue';
import Books from './components/Books.vue';
import BookProgress from './components/BookProgress.vue';
import AddBook from './components/AddBook.vue';

let books = reactive([
        {
          id: 1,
          title: "A Short History of Europe",
          cover:
            "https://m.media-amazon.com/images/I/71mMtk5i71L._AC_UF1000,1000_QL80_.jpg",
          isRead: true,
          isbn: "0-395-07157-6",
          author: "Simon Jenkins",
        },
        {
          id: 2,
          title: "The Penguin Classics",
          cover:
            "https://m.media-amazon.com/images/I/A125U3TvuaL._AC_UF1000,1000_QL80_.jpg",
          isRead: false,
          isbn: "0-395-07157-7",
          author: "Henry Eliot",
        },
        {
          id: 3,
          title: "Becoming",
          cover:
            "https://m.media-amazon.com/images/I/81cJTmFpG-L._AC_UF1000,1000_QL80_.jpg",
          isRead: false,
          isbn: "0-395-07157-8",
          author: "Michelle Obama",
        },
        {
          id: 4,
          title: "Shakespeare's Sonnets, Retold",
          cover:
            "https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9780753553138.jpg",
          isRead: false,
          isbn: "0-395-07157-9",
          author: "William Shakespeare, James Anthony",
        },
      ])

function addBook(newBook: {title: string, cover?: string, isRead: boolean, isbn: string, author?: string}){
  console.log(newBook)
}

function toggleIsRead(id : number){
  books.forEach(book => {
    if(book.id === id) 
      book.isRead = !book.isRead;
  }) 
}

let showAddBook = ref(false);

function setShowAddBook(newValue: boolean){
  showAddBook.value = newValue;
}

</script>

<template>
  <div v-if="showAddBook" class="container">
    <AddBook @setShowAddBook="setShowAddBook" @addBook="addBook"/>
  </div>
  <div v-else class="container">
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button
        class="btn"
        @click="setShowAddBook(true)"
      >
        Adicionar Livro +
      </button>
    </div>
 
    <div class="books-container">
      <Books @toggleIsRead="toggleIsRead" :books="books"/>
      <BookProgress :books="books" />
    </div>
  </div>
</template>

<style scoped>

</style>
