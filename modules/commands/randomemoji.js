module.exports.config = {
  name: "randomemoji",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Thay tÃŠn nhs chat.",
  commandCategory: "Random",
  usages: "boxname [name]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
			var emoji = ['ð', 'âĪïļ', 'ðĪĢ', 'ðķ', 'ð', 'ð', 'ðĪĒ', 'ð', 'ð', 'ðŋ', 'ð', 'ðĶ',];
			return api.changeThreadEmoji(emoji[Math.floor(Math.random() * emoji.length)], event.threadID, (err) => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
		}