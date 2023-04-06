import { FastifyInstance } from 'fastify'
import { userController } from './controllers/userController'

export async function Routes(app: FastifyInstance)
{
  app.get('/users', userController.getUsers)
  app.post('/users', userController.createUser)
}