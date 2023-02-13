import Link from "next/link"
import { Interface } from "readline"

export default function MainArticle({id, title, summary, content}) {
    return (
        <div className="bg-white w-[320px] md:w-[500px] rounded-2xl flex p-3 m-3 mx-auto justify-center border-2 border-white">
            <div className="justify-center items-center flex mx-auto mt-[2rem] md:mt-[0.7rem]">
                <div>
                    <h1 className="font-semibold text-3xl">{title}</h1>
                    <h2 className="mt-2 text-xl">{summary}</h2>
                    <h2 className="mt-3 text-lg">{content}</h2>
                </div>
            </div>
        </div>
    )
}