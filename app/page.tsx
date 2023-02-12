import { getArticles } from "@/lib/mongo/articles"
import Article from './Article'

async function fetchArticles() {
  const {articles} = await getArticles()
  
  if (!articles) throw new Error("Failed to fetch articles")
  return articles
}
export default async function Home() {
  const articles: any = await fetchArticles()
  
  return (
    <div className="mx-auto justify-center items-center h-screen">
      <ul className="mx-auto my-auto items-center justify-center flex-row" >

        {articles.map(article => (
          <Article key={article.id}
            id={article.id}
            title={article.title}
            summary={article.description }
          >
          </Article>
      ))}
      </ul>
    </div>
  ) 
}
