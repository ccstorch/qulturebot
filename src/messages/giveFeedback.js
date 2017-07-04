module.exports = (slapp) => {
  slapp.message(/(Dar feedback)/i, ['direct_message'], (msg, text) => {
    msg.say({
      attachments: [
        {
          text: 'feedback?',
          fallback: 'Fallback?',
          callback_id: 'give_feedback_callback',
          actions: [
            { name: 'answer', text: 'Dar', type: 'button', value: 'dar' },
            { name: 'answer', text: 'Pedir',  type: 'button',  value: 'pedir' }
            { name: 'answer', text: 'Dar Elogio',  type: 'button',  value: 'darElogio' }
          ]
        }]
      })
    });
  });

  slapp.action('give_feedback_callback', 'answer', (msg, value) => {
    msg.respond(msg.body.response_url, `${value} is a good choice!`)
  })
}
