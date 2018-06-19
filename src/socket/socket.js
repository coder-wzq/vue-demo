import {serverBaseUrl} from '@/config/config'

let status = false;
let stompClient = Stomp.over(new SockJS(serverBaseUrl + 'live'));
stompClient.debug = () => {
};

let sub = (channel, v, key) => {
  let subFn = (channel, v, key) => {
    stompClient.subscribe(channel, (r) => {
      v._data[key] = r.body
    });
  };
  if (!stompClient.connected) {
    stompClient.connect({}, () => {
      subFn(channel, v, key)
    });
  } else {
    subFn(channel, v, key)
  }
}

let pub = (channel) => {
  let pubFn = (channel) => {
    stompClient.send(channel);
  };
  if (!stompClient.connected) {
    stompClient.connect({}, () => {
      pubFn(channel)
    });
  } else {
    pubFn(channel)
  }
}

let connect = () => {
  stompClient.connect();
}


export default {
  stompClient, sub, pub, connect, status
}
