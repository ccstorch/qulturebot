const slack = require('slack');

module.exports = (server, slapp) => {
  server.post('/received-feedback-notification', function(req, res){
    const { botToken, botChatId } = req.body;
    slack.chat.postMessage({ token: botToken, channel: botChatId, text: 'Test' }, (error, res) => {
    });
  });
}
