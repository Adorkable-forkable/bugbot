import github from 'bugbot-github-issues'

export default function repos(payload, message) {
  let token = payload.account.github_token
  let repo = payload.account.github_repo
  let link = `<https://github.com/${repo}|${repo}>`
  let text = `Here are the open issues for ${link}:`

  github.issues(token, repo, (err, issues)=> {
    // turn the github issues into slack attachments
    let attachments = issues.map(i=> {
      let color = i.labels && i.labels[0] ? i.labels[0].color : '#E3E4E6'
      let mrkdwn_in = ['text']
      return {
        color,
        mrkdwn_in,
        title: i.title,
        title_link: i.html_url,
        author_name: i.user.login,
        author_icon: i.user.avatar_url,
        text: `#${i.number} opened ${i.created_at}`
      }
    })
    message({text, attachments})
  })
///
}
