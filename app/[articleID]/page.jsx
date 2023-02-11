import Link from "next/link"

export default function ArticleDetail({params}) {
    // Make another request to the database here to get the details of the
    // article.
    const {articleID} = params
    console.log(articleID)
    return (
        <div className="flex bg-white h-screen">
            {/* Title */}
            <div className="bg-white rounded-xl">
                <div className="py-3 m-3 ml-20 flex">
                    <div className="text-center m-3 flex text-sm items-center justify-center bg-[#E4ECF4] border-2 border-gray text-black h-10 rounded-2xl">
                        <p className="mt-[0.5rem] m-3 justify-center text-center items-center">Topic here</p>
                    </div>
                    <p className="mt-[1rem] text-gray-500">February, 11 2023</p>

                </div>
                <p className="font-semibold ml-20 mr-20">
                 This is the title of the article
                </p>

                <p className="ml-20 mr-20 mt-4">
                Summary: 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem commodi deserunt consequuntur et porro doloremque, voluptatem adipisci quae! Esse nemo sequi possimus recusandae aliquam unde et rem facere nisi.
                </p>

                <p className="ml-20 mt-4 mr-20">
                Random-access memory (RAM; /ræm/) is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code.[1][2] A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory, in contrast with other direct-access data storage media (such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory), where the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.

                RAM contains multiplexing and demultiplexing circuitry, to connect the data lines to the addressed storage for reading or writing the entry. Usually more than one bit of storage is accessed by the same address, and RAM devices often have multiple data lines and are said to be "8-bit" or "16-bit", etc. devices.[clarification needed]

                In today's technology, random-access memory takes the form of integrated circuit (IC) chips with MOS (metal–oxide–semiconductor) memory cells. RAM is normally associated with volatile types of memory where stored information is lost if power is removed. The two main types of volatile random-access semiconductor memory are static random-access memory (SRAM) and dynamic random-access memory (DRAM).

                Non-volatile RAM has also been developed[3] and other types of non-volatile memories allow random access for read operations, but either do not allow write operations or have other kinds of limitations on them. These include most types of ROM and a type of flash memory called NOR-Flash.

                Use of semiconductor RAM dated back to 1965, when IBM introduced the monolithic (single-chip) 16-bit SP95 SRAM chip for their System/360 Model 95 computer, and Toshiba used discrete DRAM memory cells for its 180-bit Toscal BC-1411 electronic calculator, both based on bipolar transistors. While it offered improved performance over magnetic-core memory, bipolar DRAM could not compete with the lower price of the then-dominant magnetic-core memory.[4]

                MOS memory, based on MOS transistors, was developed in the late 1960s, and was the basis for all early commercial semiconductor memory. The first commercial DRAM IC chip, the 1K Intel 1103, was introduced in October 1970.

                Synchronous dynamic random-access memory (SDRAM) later debuted with the Samsung KM48SL2000 chip in 1992.
                </p>
                
            </div>
        

            {/* Area for question and answering */}
            {/* May be can get chatGPT or another question and answering model here. */}
        </div>
    )
}