module.exports = (slapp) => {
  slapp.message('^(Ola|Olá|Oi|Hello|E ai|E aí|Bom dia|Boa tarde|Boa noite|Tem alguém ai|Tem alguem ai|tudo bem|Tudo bem|.)$', ['direct_mention', 'direct_message'], (msg, text) => {
    msg.say(["Olá!", "Oi humano!"]);
  });
}
