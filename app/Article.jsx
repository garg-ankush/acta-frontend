import Link from "next/link"
import { Interface } from "readline"
import Image from "next/image"

export default async function Article({id, title, summary, color}) {
    const colorPicker = {
        "blue": "bg-cyan-100",
        "red": "bg-rose-200",
        "white": "bg-neutral-200",
        "amber": "bg-amber-100",
        "lime": "bg-lime-50",
        "emerald": "bg-emerald-50",
        "purple": "bg-purple-100",
        "violet": "bg-violet-100",
        "sky": "bg-sky-200",
        "gray": "bg-gray-200",
    }
    return (
        <div className="bg-white w-[320px] md:w-[500p x] rounded-2xl flex p-3 m-3 mx-auto justify-center border-2 border-white">

            <div className="justify-center items-center flex mx-auto mt-[2rem] md:mt-[0.7rem]">
                <div>
                    {/* <img src={imageUrl} width={200} height={200}/> */}
                    {/* <Image src={imageUrl} alt={imageUrl}/> */}
                </div>
                <div>
                    <Link href={`/${id}`}>
                            <div className={`${colorPicker[color]} rounded-lg`}>
                                <h1 className="font-semibold ml-2">{title}</h1>
                            </div>
                            <div className="bg-">
                                <h2 className="mt-2">{summary}</h2>
                            </div>
                        </Link>
                </div>
                   
            </div>
        </div>
    )
}