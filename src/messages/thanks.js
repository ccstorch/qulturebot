module.exports = (slapp) => {
  slapp.message(/^(obrigado|obrigada|tks|thx|valeu|show|tkss|tksss|tksssss|agradecido)/i, ['mention', 'direct_message'], (msg) => {
    msg.say([
      "Que bom que você gostou! :smile:",
      "Fico feliz em poder ajudar",
    ])
  })
}
