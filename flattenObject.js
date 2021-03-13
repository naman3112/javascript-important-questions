
function flatten(ob){
    let result ={};
    for(let i in ob){
      if(typeof ob[i]=='object'){
          const temp = flatten(obj[i]);
          for(const j in temp){
              result[i+'.'+j]=temp[j];
          }
      }
      else{
          result[i]=ob[i];
      }
    }
    return result;
    
    }
