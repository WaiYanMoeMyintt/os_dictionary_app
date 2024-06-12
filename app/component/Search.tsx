"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Dictionary from "./Dictionary";
import { Skeleton } from "@/components/ui/skeleton";
import Noun from "./Noun";

const Search = () => {
  const [value, setValue] = useState<string>("computer");
  const [dictionary, setDictionary] = useState<any>({});
  const [photo, setPhoto] = useState<any>({});
  const dictionaryAPI: string = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
  const photoAPI: string = `https://api.unsplash.com/search/photos?query=${value}&client_id=qWxS1NkOkoq5Wox-dDXbOXhTUZnBD9hy_Rs_vbzOgD4`;

  const audio =
    dictionary.phonetics?.map((items: any, index: number) => {
      return items.audio;
    }) || [];

  const nounMeaning = dictionary.meanings?.map((items: any) => {
    if (items?.partOfSpeech === "noun") {
      return items.definitions?.map((defi: any, index: number) => {
        return defi.definition;
      });
    }
  }) || []
  const verbMeaning = dictionary.meanings?.map((items: any) => {
    if (items?.partOfSpeech === "verb" && items?.partOfSpeech) {
      return items.definitions?.map((defi: any, index: number) => {
         console.log(defi.definition)
        return defi.definition;
      });
    }
    else {
      return null;
    }
  }) || []



  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDictionary();
      fetchPhotoAPI();
    }, 1500);

    return () => clearTimeout(timer);
  }, [value]);

  const fetchDictionary = async () => {
    try {
      const fetchAPI = await fetch(dictionaryAPI);
      const resData = await fetchAPI.json();
      if (resData.length > 0 && resData.length !== 0) {
        setDictionary(resData[0]);
      } else {
        <Skeleton />;
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const fetchPhotoAPI = async () => {
    try {
      const fetchAPI = await fetch(photoAPI);
      const resData = await fetchAPI.json();
      const result = resData.results;
      if (result.length > 0) {
        setPhoto(result[0].urls.full);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchDictionary();
    fetchPhotoAPI();
  };

  const handleClick = () => {
    fetchDictionary();
    fetchPhotoAPI();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search phrases or verbs..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Image
          onClick={handleClick}
          className="cursor-pointer"
          src="/assets/search.svg"
          alt="search"
          width={20}
          height={20}
        />
      </form>
      <Dictionary
        word={dictionary.word}
        sound={audio[0]}
        phonetic={dictionary.phonetic}
        photo={photo}
      />
      <Noun noun = {nounMeaning} verb = {verbMeaning} source = {dictionary.sourceUrls} />
    </div>
  );
};

export default Search;
