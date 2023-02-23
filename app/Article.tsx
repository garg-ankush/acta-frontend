import Link from "next/link"

export type Props = {
    id: String,
    title: String,
    summary: String
}

export default function Article({id, title, summary}: Props) {

    return (
        <div className="bg-white w-[300px] md:w-[800px] mx-auto rounded-2xl m-2 border-2 border-white">
            <div className="flex mx-auto md:mt-[0.7rem]">
                <div>
                    {/* <img src={imageUrl} width={200} height={200}/> */}
                    {/* <Image src={imageUrl} alt={imageUrl}/> */}
                </div>
                <div>
                    <Link href={`/${id}`}>
                            <div className="">
                                <h1 className="font-semibold hover:text-slate-500">{title}</h1>
                            </div>
                            <div className="">
                                <h2 className="mt-2">{summary}</h2>
                            </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}