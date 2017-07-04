module.exports = (slapp) => {
  var HELP_TEXT = `
  I will respond to the following messages:
  \`help\` - to see this message.
  \`hi\` - to demonstrate a conversation that tracks state.
  \`thanks\` - to demonstrate a simple response.
  \`<type-any-other-text>\` - to demonstrate a random emoticon response, some of the time :wink:.
  \`attachment\` - to see a Slack attachment message.
  `

  slapp.message('help', ['mention', 'direct_message'], (msg) => {
    msg.say(HELP_TEXT)
  })
}
