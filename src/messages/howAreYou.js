 module.exports = (slapp) => {
   slapp.message(/(tudo bem?|Tudo certo?|Como vai?|Como andam as coisas?|Como anda?|td bem?|td certo?|td?)/i, ['direct_mention', 'direct_message'], (msg, text) => {
     msg.say("Tudo ótimo! Obrigada por perguntar.");
   });
 }
