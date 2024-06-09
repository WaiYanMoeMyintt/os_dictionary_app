import React from 'react'
import Image from 'next/image'

interface DictionaryProps {
     word:string;
     phonetic:string;
     photo: string;
}
const Dictionary: React.FC<DictionaryProps>= ({word,phonetic,photo}) => {
  return (
    <div className='dictionary_container'>
         <div className="dictionary_header py-4 px-2 ">
              <header className='flex justify-between flex-1 py-2 px-4 rounded-xl items-center'>
                    <div className="left">
                         <h3 className='text-white mb-2'>{word}</h3>
                         <p>{phonetic}</p>
                    </div>
                    <div className="right p-1 cursor-pointer">
                        <Image src = "/assets/play.svg" alt = "play" width={20} height={20} />
                    </div>
              </header>
         </div>
         <div className="dictionary_image py-4 px-2 flex justify-center items-center flex-1">
             <Image className='rounded-2xl block' src = {!photo? "/assets/whale.jpg" : photo} alt = "whale" width={400} height={200} />
         </div>
    </div>
  )
}

export default Dictionary