"use client";
import { it } from "node:test";
import React, { useState, useEffect } from "react";
import Link from "next/link";
interface nounProps {
  noun?: any;
  verb?: any;
  source: string [];
}
const Noun: React.FC<nounProps> = ({ noun, verb, source }) => {
  return (
    <div className="part_content py-4 px-2">
      <div className="noun_result  mb-4 ">
        <div className="w-full flex gap-4 items-center">
          <h3 className="mb-1 text-xl font-bold">Noun</h3>
          <div className="h-0.5 w-full bg-slate-200"></div>
        </div>
        <div className="noun_content">
          <p className="text-sm my-1">Meaning</p>
          <h3 className="leading-8">{noun}</h3>
        </div>
      </div>
      <div className="verb_result mb-4 ">
        <div className="w-full flex gap-4 items-center">
          <h3 className="mb-1 text-xl font-bold">Verb</h3>
          <div className="h-0.5 w-full bg-slate-200"></div>
        </div>
        <div className="verb_content">
          <p className="text-sm my-1">Meaning</p>
          {verb[0] === undefined ? (
            <h3>Not Availabile</h3>
          ) : (
            <h3 className="leading-8">{verb}</h3>
          )}
        </div>
      </div>

      <div className="source_result">
        <h3 className="mb-1 text-xl font-bold">Source</h3>
        {/* <Link
          className="text-sm mt-4 hover:text-blue-900 transition-all  text-blue-800"
          href={source[0]}
          target="_blank"
        >
          {source[0]}
        </Link> */}
      </div>
    </div>
  );
};

export default Noun;
