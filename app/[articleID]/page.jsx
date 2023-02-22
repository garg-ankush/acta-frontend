import Link from "next/link"
import { getArticles } from "@/lib/mongo/articles"
import AudioPlayer from '../../components/AudioPlayer'

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
    if (!isoTime) {
        return ""
    }
    const date = new Date(isoTime)
    return date.toISOString().substring(0, 10);
}

async function getAudioSourceURL(articleId) {
    return `https://dktmc4e7l08en.cloudfront.net/${articleId}.mp3`
}

async function readingTime(text) {
    if (!text) {
        return ""
    }
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  }


export default async function ArticleDetail({params}) {
    const {articleID} = params

    if (!articleID) {
        return
    }
    
    const articleDetails = await getArticleByID(articleID) || ""
    // const date = await convertISOTimeToDate(articleDetails.published_at) || ""
    const sourceURL = await getAudioSourceURL(articleID) || ""
    const audioDuration = await readingTime(articleDetails.content) || ""

    return (
        <div className="flex bg-white h-screen">
            {/* Title */}
            <div className="bg-white rounded-xl">
                <div className="py-3 m-3 ml-20 flex">
                    <div className="text-center m-3 flex text-sm items-center justify-center bg-[#E4ECF4] border-2 border-gray text-black h-10 rounded-2xl">
                        <p className="mt-[0.5rem] m-3 justify-center text-center items-center">Climate</p>
                    </div>
                    {/* <p className="mt-[1rem] text-gray-500">
                        {date}
                    </p> */}

                </div>

                <div className="justify-center bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 flex w-96 h-16 ml-20 mt-[-1rem] mb-3 rounded-xl gap-4">
                        <div className="ml-3 justify-center items-center mt-[0.7rem]">
                            <AudioPlayer audioSourceURL={sourceURL}/>
                        </div>

                        <div className="">
                            <h1 className="font-semibold text-[#FFFFFF] text-2xl mt-[1.1rem]">{audioDuration}-minute listen</h1>
                        </div>
                </div>
                
                <p className="font-semibold ml-20 mr-20">
                 {articleDetails.title}
                </p>

                <h1 className="ml-20 mr-20 mt-4">
                    <p className="font-semibold">
                        <span>Summary</span>
                    </p>
                  {articleDetails.summary}
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