import Koa from 'koa'
import Router from 'koa-router'
import fs from 'fs.js'
import koaStatic from 'koa-static'
import {koaBody} from 'koa-body'
import cors from 'koa2-cors'

import path from 'node:path'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const staticPath = './static'

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024 //限制文件上传大小，默认2M
  }
}))
app.use(koaStatic(path.join(__dirname, staticPath)))
app.use(router.routes())

// router.get('/', async (ctx) => {
//   ctx.set({'Content-Type': 'text/html'})
//   ctx.body = fs.readFileSync('./index.html')
// })

// todo 这里有时候会报Internal Server Error错误还没有解决，薛定谔的错误，不一定会出现，暂时没有弄明白原因

router.post('/api/upload', async (ctx) => {
  let file = ctx.request.files.file
  let data = fs.readFileSync(file.path)
  fs.writeFileSync(path.join(__dirname, file.name), data)
  ctx.body = {message: '上传成功'}
})

app.listen(4000, () => {
  console.log('server is running,port is 4000')
})