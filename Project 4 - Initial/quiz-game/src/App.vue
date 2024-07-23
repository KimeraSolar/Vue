<script setup>
</script>

<template>
  <section>
    <h1 class="question">Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.</h1>
      <ul class="tags">
        <li class="tag hard">Difficulty: hard</li>
        <li class="tag">Entertainment: Video Games</li>
      </ul>
  </section>
  <section class="options">
    <div class="quiz-option">
      <input type="radio" name="options" value="True">
      <label>True</label>
    </div>
    <div class="quiz-option">
      <input type="radio" name="options" value="False">
      <label>False</label>
    </div>
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
