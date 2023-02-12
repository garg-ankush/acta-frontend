import Link from "next/link"

export default function Article({id, title, summary}) {
    return (
        <div className="bg-white w-[320px] md:w-[500px] rounded-2xl flex p-3 m-3 mx-auto justify-center border-2 border-white">
            <div>
                <h1 className="font-semibold">{title}</h1>
                <h2 className="mt-2">{summary}</h2>
            </div>
            <div className="justify-center items-center flex mx-auto mt-[2rem] md:mt-[0.7rem]">
                    <Link href={`/${id}`}>
                        <h2 
                        className="text-center flex items-center justify-center text-xs bg-white border-2 border-gray text-black w-24 h-8 rounded-2xl hover:bg-[#20203F] hover:text-white shadow-lg">
                        Read
                        </h2>
                    </Link>
            </div>
            
           
            
        </div>
    )
}