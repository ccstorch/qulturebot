module.exports = (slapp) => {
  slapp.message(/(cu|bosta|idiota|burro|burra|puto|puta|caralho|cacete|merda|porra|inutil|inútil)/i, ['mention', 'direct_message'], (msg) => {
    msg.say("Calma! :scream:");
  })
}
