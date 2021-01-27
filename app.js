function store(num){
    var result = document.getElementById("inp1");
    result.value += num;
}
function clearing(){
    var result = document.getElementById('inp1');
    result.value = '';
}
function result(){
    var result = document.getElementById('inp1');
    resultValue = result.value;
    for(var i = 0;i<resultValue.length;i++){
        math = resultValue.slice(i,i+2)
        if(math === '++' || math === '--' || math === '**' || math === '//' ){
            alert('Warning! do not write double operator')
            result.value = '';
            return;       
        }        
    }
    result.value = eval(resultValue);
}