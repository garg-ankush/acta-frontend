// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getArticles } from '@/lib/mongo/articles'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {articles} = await getArticles()
      const id = req.query.id
      
      let imageUrl
      for(let i=0; i < articles.length; i++){
          if (articles[i].id === id) {
            imageUrl = articles[i].image
          }
      };
    //   if (error) throw new Error(error)

      return res.status(200).json({imageUrl})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  res.setHeader('Allow', ['POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}
