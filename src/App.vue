<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {serverBaseUrl} from '@/config/config'

  export default {
    name: 'App',
    data() {
      return {
        message: '',
        rows: [],
        serverBaseUrl: serverBaseUrl,
        stompClient: null,
        time :''
      }

    },
    methods: {
      //连接
      connect() {
        this.stompClient = Stomp.over(new SockJS(this.serverBaseUrl + 'live'));
        this.stompClient.debug = () => {};
        this.stompClient.connect({},(frame)=>{
          console.log(frame);
          this.stompClient.subscribe('/topic/send', (msg)=> {
            this.rows.push(JSON.parse(msg.body));
          });
          // 注册推送时间回调
          this.stompClient.subscribe('/topic/callback', (r)=> {
            this.time = '当前时间'+r.body
          });
        });
      },
      send() {
        this.stompClient.send("/app/send", {}, JSON.stringify({
          'message': this.message
        }));
      }
    },
    mounted() {
      // this.connect()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0px;
  }
</style>
