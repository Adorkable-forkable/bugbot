import slack from 'slack-express'
import github from 'bugbot-github-issues'

// checks for payload.acccount.github_repo
// continues if it exists / prompts if not
export default function repoIsSet(payload, message, next) {

  if (payload.account.github_repo) {
    next()
  }
  else {
    let title = 'Time to configure your repo!'
    let color = '#E3E4E6'
    let mrkdwn_in = ['text']
    let text = `
It looks like your Github account is authorized (yay!), but I still need know where to send and receive your Github Issues.
        
Please pick a Github repo from the list below, and run the repo command with the org/reponame argument, example:

\`/bugbot repo org/reponame\`

To get a list of Github repos I can use:
        
\`/bugbot repos\`
    `
    message({attachments:[{title, color, text, mrkdwn_in}]})
  }
///
}
