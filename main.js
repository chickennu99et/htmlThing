function insertScript(src){
    return new Promise((resolve, reject)=>{
        const el = document.createElement('script');
        el.src = src;
        el.onload = () =>{
            console.log("loaded script file: ${src}");
            resolve();
        };
        el.onerror = () => {
            console.log('[WARN] cannot load: ${src}');
            reject(new Error("cannot load ${src}"))
        }
        document.body.appendChild(el);
    });
}
var logHandler;
async function start()
{
    await insertScript('scriptFolder/basicFunctions.js');
    await insertScript('scriptFolder/captainsLog.js');
    
    logHandler = new captainLogger();
    logHandler.onChange = TriggerLog;
    logCall();
}

async function logCall() 
{
    try{
        await TriggerLog();
    }catch (errorLogTrigger){
        console.error(errorLogTrigger);
    }
    setTimeout(logCall, 30000);
}
async function TriggerLog()
{
    document.getElementById("logHolder").innerHTML = logHandler.getAsPId();
}
start().catch(console.error);