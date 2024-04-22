import Koa from 'koa'
import koaStatic from 'koa-static'

// ES Module 处理路径问题
import path from 'node:path'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const app = new Koa()

// 静态资源目录相对入口文件路径
const staticPath = './static'

app.use(koaStatic(path.join(__dirname, staticPath)))

app.listen(4000, () => {
  console.log('server is running，port is 4000')
})
