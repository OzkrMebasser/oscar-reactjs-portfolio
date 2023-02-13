import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./Home.css";

// const words = [" Oscar Moreno", " a web Developer", " a Programmer",
// " Oscar Moreno", " a web Developer", " a Programmer"," Oscar Moreno", " a web Developer", " a Programmer"," Oscar Moreno", " a web Developer", " a Programmer."];



export default function Typing() {

  const [t, i18n] = useTranslation("global");
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  
  const words = t("typing.auto-text", { returnObjects: true });

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1 id="goldTyping">
        <span id="whiteTyping">{t("myself.myself")}</span>
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
}
