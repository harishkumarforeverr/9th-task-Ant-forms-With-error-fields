export const blockInvalidChar = e =>
["e", "E", "+", "-","#","$","(","@",")"].includes(e.key) && e.preventDefault();

export const  funturedisabledDate=(current)=> {
    // Can not select days before today and today
    return current && current.valueOf() > Date.now();
  }