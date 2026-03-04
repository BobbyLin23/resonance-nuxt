import { ORPCError, os } from '@orpc/server'
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
})

export interface ORPCContext {
  user?: z.infer<typeof UserSchema>
}

export const pub = os
  .$context<ORPCContext>()

export const authed = pub.use(({ context, next }) => {
  if (!context.user) {
    throw new ORPCError('UNAUTHORIZED')
  }

  return next({
    context: {
      user: context.user,
    },
  })
})
