// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getArticles } from '@/lib/mongo/articles'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const articles = await getArticles()          
      return res.status(200).json({articles})

    } catch (error) {
      return res.status(500).json({"message": "Could not retrieve data from the DB"})
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}