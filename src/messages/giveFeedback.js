module.exports = (slapp) => {
  slapp.message('yesno', (msg) => {
    msg.say({
        text: '',
        attachments: [
          {
            text: '',
            fallback: 'Yes or No?',
            callback_id: 'yesno_callback',
            actions: [
              { name: 'answer', text: 'Yes', type: 'button', value: 'yes' },
              { name: 'answer', text: 'No',  type: 'button',  value: 'no' }
            ]
          }]
        })
  })
  slapp.action('yesno_callback', 'answer', (msg, value) => {
    msg.respond(msg.body.response_url, `${value} is a good choice!`)
  })

  slapp.message(/(Dar feedback|feedback)/i, 'direct_message', (msg, text) => {
    msg.say({
      text: '',
      attachments: [
        {
          text: '',
          fallback: 'Fallback?',
          callback_id: 'give_feedback_callback',
          actions: [
            { name: 'answer', text: 'Dar', type: 'button', value: 'dar' },
            { name: 'answer', text: 'Pedir',  type: 'button',  value: 'pedir' },
            { name: 'answer', text: 'Dar Elogio',  type: 'button',  value: 'darElogio' }
          ]
        }
      ]
    })
  });

  slapp.action('give_feedback_callback', 'answer', (msg, value) => {
    msg.respond(msg.body.response_url, `${value} is a good choice!`)
  })
}
