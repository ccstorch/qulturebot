module.exports = (slapp) => {
  var HELP_TEXT = `
  Ao seu dispor. Para começar, vou falar um pouco sobre como eu funciono.
  Se você precisar de mais ajuda, o ideal é ver esse <https://intercom.help/qulturerocks|artigo completinho>.
  E lembre-se que sou só uma bot.

  **O que é a Qulture.Bot?*
  Eu existo para te mandar alertas e notificações sobre tudo o que acontece na Plataforma Qulture.Rocks.
  Portanto vou te avisar quando você receber um pedido de feedback, quando você receber um feedback ou elogio, e coisas do tipo.

  No futuro - próximo - vou poder te ajudar a mandar feedbacks e elogios direto do Slack também!

  *Como faço para sugerir funcionalidades para o Qulture.Bot?*
  Excelente pergunta: mande um email para <mailto:kiko@qulturerocks.com|kiko@qulturerocks.com> que seu feedback vai ser considerado com carinho para as novas versões!
  Capriche nas sugestões. Estamos ansiosos para fazer eu ser mais útil.
  `

  slapp.message(/(Ajudar|Ajuda|Socorro|Não consigo|Nao consigo|Não sei|não sei|explicar|explica|como funciona)/i, ['mention', 'direct_message'], (msg) => {
    msg.say(HELP_TEXT)
  })
}
