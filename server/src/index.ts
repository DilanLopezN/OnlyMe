import {fastify} from 'fastify'
import cors from '@fastify/cors'
import { Routes } from './routes'
const app = fastify()
app.register(cors, {origin: true})
app.register(Routes)
app.listen({ port: 5000 }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log("Server Running")
})