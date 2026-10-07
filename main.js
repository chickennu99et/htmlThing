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