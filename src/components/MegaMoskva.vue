<template>
    <div>
      <button v-on:click="sendEmoji('normal')">Normal 😃</button>
      <button v-on:click="sendEmoji('good')">Good 😍</button>
      <button v-on:click="sendEmoji('bad')">Bad 😎</button>
    </div>
  
    <div id="nav">
      <router-link to="/shops/2">MegaMoskva</router-link>
    </div>
  
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'MegaMoskva',
    data() {
      return {
        modifiedData: {
          status: '',
          ip_address: '',
          shop_id: 2
        },
        error: null
      }
    },
  
  methods: {
      sendEmoji(status) {
        axios.post('http://localhost:1337/api/feedbacks', {
          data: {
              status: status, //modifiedData.status,
              ip_address: '126.12.29.29', //modifiedData.ip_address,
              shop_id: 2 //modifiedData.shop_id
            }
          })
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
  #MegaMoskva {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  </style>