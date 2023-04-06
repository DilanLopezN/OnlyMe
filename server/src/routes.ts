import { FastifyInstance } from 'fastify'
import { userController } from './controllers/userController'

export async function Routes(app: FastifyInstance)
{

  app.post('/users', userController.createUser)
  app.get('/users', userController.getUsers)
 
}