import { getArticles } from "@/lib/mongo/articles"
import { render } from "react-dom"
import Article from './Article'

export const revalidate = 3600;

type ArticleProps = {
  id: String
  title: String
  summary: String
}

// async function fetchImages(id: string) {
//   const res = await fetch(`${process.env.BASE_URL}/api/images/post?&id=${id}`)
// }

// export async function getServerSideProps() {
//   const {articles} = await getArticles()

//   return {
//     props: {
//       articles: articles
//     }
//   }
// }

export default async function Home() {
  const articles = await getArticles()

  return (
    <div className="mx-auto min-h-screen mt-[2rem] flex gap-24 justify-center">
      <div className="">
        <h1 className="text-2xl">Recent <span className="font-semibold">Articles</span> </h1>
        <ul className="mx-auto my-auto items-center justify-center flex-row" >
        {articles && articles.map((article: ArticleProps) => (
          <div>
            <Article
            id={article.id}
            title={article.title}
            summary={article.summary}
          />

            <div className="h-[0.1rem] items-center justify-center bg-gray-300"></div>
          </div>
          
        ))}
      </ul>
      </div>
      
    </div>
  ) 
}
