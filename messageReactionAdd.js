module.exports.run = async(bot, reaction, user) => {

    if(user === bot.user) return;

    if (reaction.emoji == bot.emojis.find('name', 'baka')) {
        user.addRole('name', '> Baka');
    } 
    if (reaction.emoji == bot.emojis.find('name', 'neko')) {
        user.addRole('name', '> Neko');
    }

}

module.exports.config = {
    event: 'messageReactionAdd',
}