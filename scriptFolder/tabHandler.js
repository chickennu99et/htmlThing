let currentPanel = "MCD";
function switchTo(Id)
{
    document.getElementById(currentPanel).hidden=true;
    document.getElementById(Id).hidden=false;
    currentPanel=Id;
}