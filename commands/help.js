const menu = {
    main: `
        weather [command] <option>

        today.............show weather for today
        tomorrow..........show weather for tomorrow
        two_days_ahead....show weather for two_days_ahead
        version...........show version of app
        help..............show help menu for command
        `,
    today: `
         weather today <options>
         
         eg weather today --location, -1 ... to pass location variation
         `,
    tomorrow: `
        weather tomorrow <options>
        
        eg weather tomorrow --location, -1 ... to pass location variation
        `,
    two_days_ahead: `
        weather two_days_ahead <option>

        eg weather two_days_ahead --location, -1 ... to pass location variation
        `
}

module.exports = (args) => {
    const optionalCommand = (args._[0] === 'help') ? args._[1]:args._[0];

    console.log(menu[optionalCommand] || menu.main);
    
}