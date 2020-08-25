// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const courses = await db.collection('courses').where({
    'class': event.myClass,
    'term':  event.term
  }).get()
  return {
    data: courses.data
  }
}