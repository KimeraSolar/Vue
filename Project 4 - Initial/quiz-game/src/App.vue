<script setup>
import { fetchQuestion } from './utils/fetchQuestion';
import shuffleArray from './utils/shuffle';
import ScoreBoard from '@/components/ScoreBoard.vue'

// Esse script não pode ter o export default, por causa do setup
</script>

<script>
export default {
  name: 'App',
  components: {
    ScoreBoard
  },
  data(){
    return{
      quiz: {
        type: undefined,
        difficulty: undefined,
        category: undefined,
        question: undefined,
        correct_answer: undefined,
        incorrect_answers: []
      },
      chosen_answer: undefined,
      answer_submitted: false,
      win_count: 0,
      total_questions: 0
    }
  },
  methods: {
    async getNewQuestion(){
      this.answer_submitted = false;
      this.chosen_answer = undefined;
      this.quiz = {
        type: undefined,
        difficulty: undefined,
        category: undefined,
        question: undefined,
        correct_answer: undefined,
        incorrect_answers: []
      };
      this.quiz = await fetchQuestion(this.axios);
    },
    submitAnswer(){
      if(this.chosen_answer){
        this.answer_submitted = true;
        this.total_questions++;
      }
      if(this.chosen_answer && this.chosen_answer === this.quiz.correct_answer){
        this.win_count++;
      }
    }
  },
  computed: {
    answers(){
      let answersArray = [...this.quiz.incorrect_answers];
      answersArray.push(this.quiz.correct_answer);
      return shuffleArray( answersArray );
    },
    loading(){
      return !this.quiz.question;
    }
  },
  async created() {
    this.quiz = await fetchQuestion(this.axios);
  },
}
</script>

<template>
  <ScoreBoard :win_count="win_count" :total_score="total_questions"/>
  <span v-if="loading" class="quiz">Loading...</span>
  <section class="quiz">
    <section v-if="quiz.question">
      <h1 v-html="quiz.question" class="question"></h1>
        <ul class="tags">
          <li class="tag" :class="quiz.difficulty">Difficulty: {{ quiz.difficulty }}</li>
          <li class="tag" v-html="quiz.category"></li>
        </ul>
    </section>
    <section v-if="quiz.question" class="options">
      <div class="options-container">
        <div v-for="option in answers" class="quiz-option" :key="option">
          <input type="radio" name="options" :value="option" :id="option" v-model="chosen_answer" :disabled="answer_submitted"/>
          <label v-html="option" :for="option"></label>
        </div>
      </div>
    </section>
  </section>
  <section v-if="!this.answer_submitted" class="result">
    <button v-if="quiz.question" @click="submitAnswer()" class="send">Send</button>
  </section>
  <section v-if="this.answer_submitted" class="result">
    <h4 v-if="this.chosen_answer !== this.quiz.correct_answer">&#10060; You picked the wrong answer. The correct was <span v-html="this.quiz.correct_answer"></span>.</h4>
    <h4 v-else>&#9989; Congratulations, the answer <span v-html="this.quiz.correct_answer"></span> is correct!</h4>
    <button @click="getNewQuestion()" class="send">Next question</button>
  </section>
</template>

<style scoped>
.result{
  justify-content: end;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  min-height: 64px;
  margin-top: 32px;
}

.question{
  font-size: 30px;
  text-align: center;
  margin-bottom: 12px;
}

.tags{
  justify-content: center;
  display: flex;
  gap: 6px;
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

.options-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  min-height: 150px;
}

.options{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 60px;
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

@media (min-width: 1024px) {
  .quiz{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    align-items: baseline;
  }

  .question{
    text-align: right;
  }

  .tags{
    justify-content: right;
  }

  .options{
    align-items: baseline;
  }

}
</style>
