var pvalue=1;
function Progress(){
    var progressBar =document.getElementByIdName('progress1') ;
    setInterval(function(){
        if(pvalue<90){
            pvalue++;
            progressBar.value = pvalue;
        }
    },
    2000);
    
}
