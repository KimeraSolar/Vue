<script setup>
import shuffleArray from './utils/shuffle';

// Esse script não pode ter o export default, por causa do setup
</script>

<script>
export default {
  name: 'App',
  data(){
    return{
      quiz: {
        type: null,
        difficulty: null,
        category: null,
        question: null,
        correct_answer: null,
        incorrect_answers: []
      }
    }
  },
  computed: {
    answers(){
      let answersArray = [...this.quiz.incorrect_answers];
      answersArray.push(this.quiz.correct_answer);
      return shuffleArray( answersArray );
    }
  },
  async created() {
    const resp = await this.axios.get("https://opentdb.com/api.php?amount=1")
    this.quiz = resp.data.results[0];
  },
}
</script>

<template>
  <section>
    <h1 v-html="quiz.question" class="question"></h1>
      <ul class="tags">
        <li class="tag" :class="quiz.difficulty">Difficulty: {{ quiz.difficulty }}</li>
        <li class="tag" v-html="quiz.category"></li>
      </ul>
  </section>
  <section class="options">
    <!-- <div v-for="option in answers()" class="quiz-option">
      <input type="radio" name="options" :value="option">
      <label>{{ option }}</label>
    </div> -->
    <button class="send">Send</button>
  </section>
</template>

<style scoped>
.question{
  font-size: 30px;
  text-align: right;
  margin-bottom: 12px;
}

.tags{
  justify-content: right;
  display: flex;
  gap: 6px;
  justify-items: left;
  padding: 0;
}

.tag{
  font-weight: 500;
  list-style-type: none;
  background-color: midnightblue;
  width: fit-content;
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: 2px 4px 2px black;
  font-size: 12px;
}

.hard{
  background-color: #a40d0d;
}

.medium{
  background-color: #ac6203;
}

.easy{
  background-color: #116c11;
}

.options{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 60px;
  min-height: 150px;
}

.quiz-option{
  display: flex;
  justify-content: baseline;
  gap: 6px;
}

.send{
  width: fit-content;
  padding: 6px 32px;
  background-color: #5b5b5b;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 4px 2px black;
  color: white;
}

</style>
