class captainLogger 
{
    constructor(maxLogg=50)
    {
        this.maxLog = maxLogg;
        this.logTexts = ["Welcome Aboard Captain, log boot complete"];
        this.onChange = null;
    }
    addLog(message="error, message failure")
    {
        this.logTexts.push(message);
        if(this.onChange)
        {
            this.onChange();
        }
    }
    logFix()
    {
        if(this.logTexts.length>this.maxLog)
        {
            this.logTexts=this.logTexts.slice(this.logTexts.length-this.maxLog,this.logTexts.length);
        }
    }
    getAsPId(){
        this.logFix();
        let x = "";
        for(let i = this.logTexts.length-1; i>=0; i--)
        {
            x+="<p>" + this.logTexts[i] + "</p>";
        }
        return(x);
    }
}