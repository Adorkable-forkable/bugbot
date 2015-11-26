import save from '../adapters/dynamo/save' // TODO add redis adapter
import whoami from './whoami'
import api from './api'

// registers an account
export default function register(code, callback) {
  let url = 'https://slack.com/api/oauth.access'
  api(url, code, (err, json)=> {
    if (err) {
      callback(err)
    }
    else {
      let token = json.access_token
      let scope = json.scope
      // use the token to get the user account info
      whoami(token, (err, acct)=> {
        // save token and owner
        acct.token = token
        acct.owner = true
        save(acct, callback)
      })      
    }
  })
}
