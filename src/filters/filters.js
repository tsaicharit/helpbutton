export function charecters(val){
  let data = val.replace(/[^A-Za-z]/,'');
  return data.toUpperCase();
}

export function numCharCap(val){
  let data = val.replace(/[^A-Za-z0-9]/,'');
  if(data.length <= 8){
    return data.toUpperCase();
  }
  return data.substring(0, data.length - 1);
}

export function mobNumber(val){
  let data = val.replace(/[^\d]/,'');
  if(data.length <= 10){
    return data;
  }
  return data.substring(0, data.length - 1);
}