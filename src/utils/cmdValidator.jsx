import * as commands from './commands'

export default async function cmdValidator(command,setCommand,setHistory,clearHistory) {

    const args = command.split(' ');
    args[0] = args[0].toLowerCase();

    await setHistory(command);
    await setCommand(''); 

    if(args[0] === ''){
        setHistory('');
    }
    else if (args[0] === 'clear') {
        clearHistory();
    }
    else if(Object.keys(commands).indexOf(args[0])===-1){
        setHistory(`command ${args[0]} not found. Please use command 'help' to get a list of available commands.`);
    }
    else{
        const output= await commands[args[0]](args.slice(1));
        setHistory(output);
    }




}



  