import Link from "next/link"
import { getArticles } from "@/lib/mongo/articles"

async function getArticleByID(articleID) {
    const {articles} = await getArticles()

    let articleDetails
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === articleID) {
            articleDetails = articles[i]
        }
      }
    return articleDetails
}

async function convertISOTimeToDate(isoTime) {
    const date = new Date(isoTime)
    return date.toISOString().substring(0, 10);
}

export default async function ArticleDetail({params}) {
    const {articleID} = params
    
    const articleDetails = await getArticleByID(articleID)
    const date = await convertISOTimeToDate(articleDetails.publishedAt)
    
    return (
        <div className="flex bg-white h-screen">
            {/* Title */}
            <div className="bg-white rounded-xl">
                <div className="py-3 m-3 ml-20 flex">
                    <div className="text-center m-3 flex text-sm items-center justify-center bg-[#E4ECF4] border-2 border-gray text-black h-10 rounded-2xl">
                        <p className="mt-[0.5rem] m-3 justify-center text-center items-center">Climate</p>
                    </div>
                    <p className="mt-[1rem] text-gray-500">
                        {date}
                    </p>

                </div>
                <p className="font-semibold ml-20 mr-20">
                 {articleDetails.title}
                </p>

                <h1 className="ml-20 mr-20 mt-4">
                    <p className="font-semibold">
                        <span>Summary</span>
                    </p>
                  {articleDetails.description}
                </h1>

                <h1 className="ml-20 mt-4 mr-20">
                    <p className="font-semibold">
                        <span>Article</span>
                    </p>
                    {articleDetails.content}
                </h1>
                
            </div>
        

            {/* Area for question and answering */}
            {/* May be can get chatGPT or another question and answering model here. */}
        </div>
    )
}