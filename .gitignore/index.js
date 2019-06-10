const Discord - require('discord.js');
const bot - new Discord.Client();

var prefix = ("*")

bot.on('ready',function(){
    bot.user.setGame("Command: *help");
    console.log(Connected);
});

bot.login("NTg3MzM5NjI1NjEwMjE1NDI1.XP3tXw.2hG-NpYXXWoRQyCW17HkGGck-UA")


bot.on('message',message ->{
    if (message.content === prefix + "help "){
        message.channel.sendMessage("Liste des commandes: \n - *help");
    }
    if (message.content === "DJ"){
        message.reply("Emoj Va Faire Peter Le Son !");
        console.log("Commande DJ effectué");
    }
});
