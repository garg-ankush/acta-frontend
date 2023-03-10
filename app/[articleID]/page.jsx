import Link from "next/link"
import { getArticles } from "@/lib/mongo/articles"
import AudioPlayer from '../../components/AudioPlayer'

async function getArticleByID(articleID) {
    const articles = await getArticles()

    // get the article by id
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
    return `${process.env.AUDIO_SOURCE}/${articleId}.mp3`
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
        <div className="flex bg-white h-screen mx-auto w-[300px] md:w-[800px]">
            {/* Title */}
            <div className="">
                <div className="py-3 m-3 ml-20">
                    {/* <div className="text-center m-3 flex text-sm items-center justify-center bg-[#E4ECF4] border-2 border-gray text-black h-10 rounded-2xl">
                        <p className="mt-[0.5rem] m-3 justify-center text-center items-center">Climate</p>
                    </div> */}
                    {/* <p className="mt-[1rem] text-gray-500">
                        {date}
                    </p> */}

                </div>

                <div className="p-2 md:ml-20 md:mr-20 justify-center bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 flex md:w-96 md:h-16 w-72 h-16 mt-[-1rem] mb-3 rounded-xl gap-4">
                        <div className="ml-3 justify-center items-center">
                            <AudioPlayer audioSourceURL={sourceURL}/>
                        </div>

                        <div className="">
                            <h1 className="font-semibold text-[#FFFFFF] text-2xl mt-[0.5rem]">{audioDuration}-minute listen</h1>
                        </div>
                </div>
                
                <p className="font-semibold flex p-2 md:ml-20 md:mr-20">
                 {articleDetails.title}
                </p>

                <h1 className="p-2 md:ml-20 md:mr-20 mt-4">
                    <p className="font-semibold">
                        <span>Summary</span>
                    </p>
                  {articleDetails.summary}
                </h1>

                <h1 className="p-2 md:ml-20 md:mr-20 mt-4">
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