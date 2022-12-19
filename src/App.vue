<template>
  <form>
    <!-- <div id="feedback">
    <button id="good" onClick="send_data()"><img alt="Good" id="gd" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png" width="50" height="50"></button>
    <button id="normal" onClick="send_data()"><img alt="Normal" id="nr" src="https://images.emojiterra.com/twitter/v13.1/512px/1f610.png" width="50" height="50"></button>
    <button id="bad" onClick="send_data()"><img alt="Bad" id="bd" src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f625.png" width="50" height="50"></button>
    </div> -->

    <div v-for="todo in modifiedData">
      <div v-on:click="testFunc(todo.text)">
        {{todo.text}}
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      modifiedData: {
        status: '',
        ip_address: '',
        shop_id: 1, //prompt()
      },
      error: null
    }
  },

  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:1337/api/feedbacks', {
          data: {
            status: this.modifiedData.status,
            ip_address: this.modifiedData.ip_address,
            shop_id: this.modifiedData.shop_id
          }
        })
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    },

    //var iptGood = document.getElementById('good');
    //var iptNormal = document.getElementById('normal');
    //var iptBad = document.getElementById('bad');   
    
    //var btnGood = document.getElementById('gd');
    //var btnNormal = document.getElementById('nr');
    //var btnBad = document.getElementById('bd');

//     handleSend: async function(e) {
//     e.preventDefault();

//     try {
//     const iptGood = document.getElementById('good');
//     const btnGood = document.getElementById('gd');
//     btnGood.addEventListener('send_data', function() {
//       if(iptGood === 'gd') {
//         const response = axios.post('http://localhost:1337/api/feedbacks', {
//           data: {
//             status: 'good', //this.modifiedData.status,
//             ip_address: '126.12.15.55', //this.modifiedData.ip_address,
//             shop_id: 1 //this.modifiedData.shop_id
//           }
//         }); console.log(response);
//       } else {
//           console.log("Invalid data");
//       }
//     });

//     const iptNormal = document.getElementById('normal');
//     const btnNormal = document.getElementById('nr');
//     btnNormal.addEventListener('send_data', function() {
//       if(iptNormal === 'nr') {
//         const response = axios.post('http://localhost:1337/api/feedbacks', {
//           data: {
//             status: 'normal', //this.modifiedData.status,
//             ip_address: '126.12.15.55', //this.modifiedData.ip_address,
//             shop_id: 1 //this.modifiedData.shop_id
//           }
//         }); console.log(response);
//       } else {
//           console.log("Invalid data");
//       }
//     });

//     const iptBad = document.getElementById('bad');
//     const btnBad = document.getElementById('bd');
//     btnBad.addEventListener('send_data', function() {
//       if(iptBad === 'bd') {
//         const response = axios.post('http://localhost:1337/api/feedbacks', {
//           data: {
//             status: 'bad', //this.modifiedData.status,
//             ip_address: '126.12.15.55', //this.modifiedData.ip_address,
//             shop_id: 1 //this.modifiedData.shop_id
//           }
//         }); console.log(response);
//       } else {
//           console.log("Invalid data");
//       }
//     });
//   } catch(error) {
//         this.error = error;
//       }
// }

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
