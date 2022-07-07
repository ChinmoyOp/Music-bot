module.exports = {
    app: {
        px: 'XXX',
        token: 'OTk0MTk0Njk3NTM2OTQ2MjA3.Gp7ZEF.BnJGuPKavFrwXCZd8852sx1tIt7LlqTMQPI7PI',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
