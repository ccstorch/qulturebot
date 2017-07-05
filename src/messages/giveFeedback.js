module.exports = (slapp) => {
  slapp.message(/(Dar feedback|feedback)/i, 'direct_message', (msg, text) => {
    msg.say({
      text: '',
      attachments: [
        {
          text: '',
          fallback: 'Fallback?',
          callback_id: 'give_feedback_callback',
          actions: [
            { name: 'answer', text: 'Dar', type: 'button', value: 'give' },
            { name: 'answer', text: 'Pedir',  type: 'button',  value: 'ask' },
            { name: 'answer', text: 'Dar Elogio',  type: 'button',  value: 'givePraise' }
          ]
        }
      ]
    })
  });

  slapp.action('give_feedback_callback', 'answer', (msg, value) => {
    switch (value) {
      case 'give': return msg.respond(msg.body.response_url, 'https://app.qulture.rocks/#/company//feedbacks/give/');
      case 'givePraise': return msg.respond(msg.body.response_url, 'https://app.qulture.rocks/#/company//feedbacks/give-praise/');
      case 'ask': return msg.respond(msg.body.response_url, 'https://app.qulture.rocks/#/company//feedbacks/ask/');
    }
  })
}
