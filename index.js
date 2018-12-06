/*
 * @Description: 
 * @Author: vencent
 * @Date: 2018-12-06 09:24:34
 * @LastEditors: vencent
 * @LastEditTime: 2018-12-06 10:22:08
 */

function Animal(name){
  this.name = name;
  this.jump = function(){
    console.log('cat jump');
  };
}
/**
 * @msg: 
 * @param {type} 
 * @return: 
 */
var cat = new Animal('cat');
cat.jump();
