<!-- <template>
  <form>
    <div id="feedback">
    <button id="good" onClick="send_data()"><img alt="Good" id="gd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png" width="50" height="50"></button>
    <button id="normal" onClick="send_data()"><img alt="Normal" id="nr" src="https://images.emojiterra.com/twitter/v13.1/512px/1f610.png" width="50" height="50"></button>
    <button id="bad" onClick="send_data()"><img alt="Bad" id="bd" src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f625.png" width="50" height="50"></button>
    </div>
  </form>
</template> -->


<template>
  <div>
    <button v-on:click="sendEmoji('😃')">Send 😃</button>
    <button v-on:click="sendEmoji('😍')">Send 😍</button>
    <button v-on:click="sendEmoji('😎')">Send 😎</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    sendEmoji(emoji) {
      axios.post('http://localhost:1337/api/feedbacks', { emoji })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
