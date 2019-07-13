module.exports.run = async (bot, message, args) => {
    const Meanie = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!Meanie) return message.channel.send("Can't find the user!");
        let bReason = args.join(" ").slice(26);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nice try buddy. But you don't have permissions.");
        if(Meanie.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person is too cool to be banned.");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#ff0000")
        .addField("Kicked user", `${Meanie} with ID ${Meanie.id}`)
        .addField("Reason", bReason)

        message.guild.member(Meanie).kick(bReason);
        message.channel.send(banEmbed);
};


module.exports.help = {
    name: 'kick',
    aliases: []
};