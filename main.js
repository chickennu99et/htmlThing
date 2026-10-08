function insertScript(id){
    const src = document.createElement('script');
    src.src = id;
    src.type = 'text/javascript';
    src.onload = () =>{
        console.log('loaded script file: ${id}');
    };
    src.onerror = () => {
        console.log('[WARN] cannot load: ${id}');
    }
    document.body.appendChild(src);
}
insertScript('scriptFolder/basicFunctions.js');
insertScript('scriptFolder/captainsLog.js');

var logHandler = new captainLogger();

async function logCall() 
{
    alert("e");
    try{
        await TriggerLog();
    }catch (errorLogTrigger){
        console.error(errorLogTrigger);
    }
    setTimeout(logCall, 10000);
}
async function TriggerLog()
{
    document.getElementById("textContent") = logHandler.getAsPId();
}
logCall();