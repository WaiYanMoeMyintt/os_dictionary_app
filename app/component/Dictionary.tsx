import React from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
interface DictionaryProps {
  word: string;
  phonetic: string;
  photo: string;
  sound: any;
}

const Dictionary: React.FC<DictionaryProps> = ({
  word,
  phonetic,
  photo,
  sound,
}) => {
  const playSound = () => {
    if (sound) {
      return new Audio(sound).play();
    } else {
      toast.error(`Sound can't availabile`);
      return new Audio("").play();
    }
  };

  return (
    <div className="dictionary_container">
      <div className="dictionary_header py-4 px-2 ">
        <header className="flex justify-between flex-1 py-2 px-4 rounded-xl items-center">
          <div className="left">
            <h3 className="text-white mb-2">{word}</h3>
            <p>{phonetic}</p>
          </div>
          <div className="right p-1 cursor-pointer">
            <Image
              src="/assets/play.svg"
              alt="play"
              width={20}
              height={20}
              onClick={playSound}
            />
          </div>
        </header>
      </div>
      <div className="dictionary_image py-4 px-2 flex justify-center items-center flex-1">
        {!photo && photo.length === 0 ? (
          <Skeleton />
        ) : (
          <Image
            className="rounded block dicitonary_image"
            src={!photo ? "/assets/whale.jpg" : photo}
            alt="whale"
            width={400}
            height={200}
          />
        )}
      </div>
      <Toaster reverseOrder={false} position="top-center" />
    </div>
  );
};

export default Dictionary;
