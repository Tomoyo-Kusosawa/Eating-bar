// utils.js
// 获取当前日期
function getCurrDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // 月份
  var day = date.getDate();
  if (month < 10) {
      month = "0" + month;
  }
  if (day < 10) {
      day = "0" + day;
  }
  return year + "-" + month + "-" + day;
}
// 获取当前时间
function getCurrTime(){
  // return: 12:01
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return hours+":"+minutes;
}
// 重点
module.exports = {
  getCurrDate,
  getCurrTime,
}
