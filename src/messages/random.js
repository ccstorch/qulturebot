module.exports = (slapp) => {
  // Catch-all for any other responses not handled above
  slapp.message('.*', ['mention', 'direct_message'], (msg) => {
    msg.say("Hmmm, não entendi o que você quis dizer. Mas se você digitar 'ajuda' posso te explicar como eu funciono :smile:");
  })
}
