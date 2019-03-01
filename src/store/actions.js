import axios from 'axios'

let header2 = {
  'async': true,
  'crossDomain': true,
  'headers': {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
}

export default {
  login(vuexContext, data) {
    return axios.post('http://pthat.nozm.net/api/auth/login', data, header2)
  }
}
