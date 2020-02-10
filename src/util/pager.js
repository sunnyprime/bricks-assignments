export function paginate(arr) {
var itemPerPage= 10
var newarray=[]
var flagarray = []
const newarr = arr.map((item,index)=>{
flagarray =[...flagarray,item]
if(flagarray.length===itemPerPage){
  newarray = [...newarray,flagarray]
  flagarray=[]
}
if(index===arr.length-1){
  if (flagarray!==null){
  newarray = [...newarray,flagarray]
  }
}})
return newarray






}