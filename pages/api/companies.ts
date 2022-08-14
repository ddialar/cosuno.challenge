import type { NextApiRequest, NextApiResponse } from 'next'
import { companyHandlers } from '@handlers'
import { MethodNotAllowedError } from '@errors'

interface ActionElements {
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>
}

const actions: Record<string, ActionElements> = {
  GET: {
    handler: companyHandlers.getFilteredCompanies
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method && method in actions) {
    const { handler } = actions[method as keyof typeof actions]
    return await handler(req, res)
  }
  throw new MethodNotAllowedError()
}
