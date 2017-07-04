module.exports = (slapp) => {
  slapp.message(/(quantos anos|qual seu nome|qual nome|de onde você vem|de onde vc|de onde voce vem|quem é vc|quem e vc|qual signo|qual seu signo|qual religião|qual sua religião)/i, ['mention', 'direct_message'], (msg) => {
    msg.say("Meu nome é Qulture.Bot. \nNasci em Julho de 2017 (canceriana como meu avô) na Irlanda - mas meu coração é Brasileiro. \nSou meio desligada do futebol :flushed:, mas acompanho Lol e Dota bem de perto. \nE gosto de Magic também!");
  })
}
