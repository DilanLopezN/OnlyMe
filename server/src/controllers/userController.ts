import { prisma } from "../services/prismaService";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email()
})
export const userController ={
  createUser: async(request:FastifyRequest, reply: FastifyReply) => {
    const { name, email } = UserSchema.parse(request.params)
    try {
      const userAlreadyExists = await prisma.user.findUnique({where: {email: email}})
      if (userAlreadyExists) return reply.status(404).send({message: "User already exists"})
      await prisma.user.create({data:{name, email}})
    } catch (error) {
      return reply.status(404).send({message: error})
    }
  },

  getUsers: async(request:FastifyRequest, reply: FastifyReply) => {
    const user = await prisma.user.findMany()
    return reply.send(user)
  }
}