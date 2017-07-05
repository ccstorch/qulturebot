module.exports = (slapp) => {
  slapp.message(/(Dar feedback|feedback)/i, 'direct_message', (msg, text) => {
    msg.say({
      text: 'Posso te ajudar com alguns atalhos espertos. No futuro, você vai poder fazer tudo isso daqui.',
      attachments: [
        {
          text: '',
          fallback: 'Fallback?',
          callback_id: 'give_feedback_callback',
          actions: [
            { name: 'answer', text: 'Mandar feedback', type: 'button', value: 'give' },
            { name: 'answer', text: 'Pedir feedback',  type: 'button',  value: 'ask' },
            { name: 'answer', text: 'Mandar elogio',  type: 'button',  value: 'givePraise' }
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
