module.exports = (slapp) => {
  slapp.message(/^(tchau|até|até mais|bye|tchauzinho|falou|ok)/i, ['mention', 'direct_message'], (msg) => {
    msg.say(["Até mais.", "Falou.", "Tchauzinho."]);
  })
}
