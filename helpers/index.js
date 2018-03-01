'use strict'
class gabungkata{
  constructor(first,last){
    this.first=first
    this.last=last
  }

   joinKata(){
    return this.first+' '+  this.last
  }

}
module.exports={
  gabungkata:gabungkata
}
