class captainLogger 
{
    constructor(maxLogg=50)
    {
        this.maxLog = maxLogg;
        this.logTexts = ["Welcome Aboard Captain, log boot complete"];
    }
    addLog(message="error, message failure")
    {
        this.logTexts.push(message);
    }
    logFix()
    {
        if(this.logTexts.length>this.maxLog)
        {
            this.logTexts=this.logTexts.slice(this.logTexts.length-this.maxLog,this.logTexts.length);
        }
    }
    getAsPId(){
        logFix();
        let x = "";
        for(let i = this.logTexts.length-1; i>=0; i++)
        {
            x+="<p>" + this.logTexts[i] + "</p>";
        }
        return(x);
    }
}