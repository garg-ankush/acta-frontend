import { getArticles } from "@/lib/mongo/articles"
import Article from './Article'
import MainArticle from './MainArticle'

type ArticleProps = {
  id: String
  title: String
  summary: String
}

async function fetchArticles() {
  const {articles} = await getArticles()
  
  if (!articles) throw new Error("Failed to fetch articles")
  return articles
}

async function fetchImages(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/images/post?&id=${id}`)
}


export default async function Home() {
  const articles: any = await fetchArticles()

  const mainArticle = articles[0]
  
  const colors = [
    "blue",
    "red",
    "white",
    "amber",
    "lime",
    "emerald",
    "purple",
    "violet",
    "sky",
    "gray"
  ]
  return (
    <div className="mx-auto justify-center items-center min-h-screen flex gap-24">
      <div className="top-0 mt-[-36.5rem] left-0 right 0">
        <h1 className="p-3 font-semibold text-5xl">Article of the week</h1>

          <MainArticle
            id={mainArticle.id}
            title={mainArticle.title}
            summary={mainArticle.summary}
            content={mainArticle.content}
          />
      </div>
      <div className="top-0 left-0 right 0">
        <h1 className="p-3 font-semibold text-5xl">Recent Articles</h1>
        <ul className="mx-auto my-auto items-center justify-center flex-row" >

        {articles.map(({article, index}: {article: ArticleProps, index: string}) => (
          <Article 
            id={article.id}
            title={article.title}
            summary={article.summary}
            color={colors[index]}
          />
        ))}
      </ul>
      </div>
      
    </div>
  ) 
}
