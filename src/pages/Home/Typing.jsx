import React, { useState, useEffect, Fragment } from "react";

import { useTranslation } from 'react-i18next';

import "./Home.css";

/**
 *  texto con Efecto de  una máquina de escribir
 * @param {string[]} words - arreglo de palabras a mostrar 
 * @param {number} speed - velocidad de la animación en ms
*/

function useTypeWriter(words) {

  const [index, setIndex] = useState(0);  
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false); 

   // typeWriter
  useEffect(() => {

    const handleType = () => {
      
      if (!reverse && subIndex === words[index].length) {
  
        setReverse(true)
        return
      
      }
      
      if (reverse && subIndex === 0) {

        setReverse(false);
        
        setIndex(prev => 
          prev === words.length - 1 ? 0 : prev + 1  
        );
        
        return
        
      }

      const timeout = setTimeout(() => {
        setSubIndex(prev => prev + (reverse ? -1 : 1));
      }, Math.max(reverse ? 75 : 350, Math.random() * 350 ));

      


      return () => clearTimeout(timeout);
    }

    handleType();

  }, [subIndex, index, reverse]);

  return { index, subIndex, reverse };

}

/**
 * cursor parpadeante 
 * @param {string} text - texto a mostrar
*/

function Blinker({ blink }) {

  const [isBlinking, setIsBlinking] = useState(true); 

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsBlinking(prev => !prev);  
    }, 500);

    return () => clearTimeout(timeout);

  }, [isBlinking]);

  return (
    <>
      {`${blink}${isBlinking ? "|" : " "}`}   
    </>
  )

}


export default function Typing() {

  const [t, i18n] = useTranslation("global"); 
  
  const words = t("typing.auto-text", { returnObjects: true });

  const { index, subIndex } = useTypeWriter(words);

  return (
     
    <Fragment>

      <h1 id="goldTyping" className="animatedHello rollIn">

        <span id="whiteTyping">{t("myself.myself")}</span> 

        <Blinker blink={words[index].substring(0, subIndex)}/>

      </h1>

    </Fragment>

  );

}