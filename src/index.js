import slack, {slash, start} from './slack-bang-slash-hack'

// handler for the slack slash command: /bugbot
slash('/bugbot', (payload, message)=> {
  message({
    text: `got a message! ${JSON.stringify(payload)}`
  })
})

// handler for the slack slash command: /bugbot
slash('/bugbot open', (payload, message)=> {
  message({
    text: `got a message! ${JSON.stringify(payload)}`
  })
})

// handler for the slack slash command: /bugbot
slash('/bugbot list', (payload, message)=> {
  message({
    text: `got a message! ${JSON.stringify(payload)}`
  })
})

// handler for the slack slash command: /bugbot
slash('/bugbot help', (payload, message)=> {
  message({
    text: `got a message! ${JSON.stringify(payload)}`
  })
})

//start('bb')

import express from 'express'
import path from 'path'

// create a brand new express app
let app = express()

// setup some local views
let views = path.join(__dirname, 'views')
app.set('views', views)
app.set('view engine', 'ejs')

// mount our slash command app
app.use('/bugbot', slack)
    
// render the homepage
app.get('/', (req, res)=> {
  res.render('index')
})

// if we're not a module start the server
// (and otherwise export as a module …for testing, etc)
if (require.main === module) {
  app.listen(process.env.PORT || 3000, x=> {
    console.log('listening on http://localhost:3000')
  })
}

export default app
