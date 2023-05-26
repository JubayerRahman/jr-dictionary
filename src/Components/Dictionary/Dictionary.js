import React, { useEffect, useState} from 'react'
import "./Dictionary.css"
import Animation from '../Animation'

const Dictionary = () => {
  const [Word, setWord] = useState('');
  const [showWord, setShowWord] = useState('');
  const [phonetic, setphonetic] = useState('');
  const [text, setText] = useState('');
  const [audio, setAudio] = useState('');
  const [partOfSpeech, setpartOfSpeech] = useState('');
  const [definition, setdefinition] = useState('');
  const [resultClass, setresultClass] = useState('hideResult');
  const [audioClass, setaudioClass] = useState('soundButton');
  const getWord=(event)=>{
    setWord(event.target.value)
  }
  const buttonFunction =()=>{
    if(Word=== ""){
      alert("Enter a word")
    }
    else{
      console.log(Word)
      setresultClass("resultSection")
      let Api = `https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`;
    console.log(Api)
      fetch(Api)
      .then(Response=> Response.json())
      .then(data=>(
        setShowWord("Word:"+" "+ data[0].word),
        setphonetic("Phonetic:"+"  "+ data[0].phonetic),
        setText("Text:"+" "+data[0].phonetics[0].text),
        setAudio(data[0].phonetics[0].audio),
        setpartOfSpeech("part Of Speech:"+" "+data[0].meanings[0].partOfSpeech),
        setdefinition("Definition:"+" "+data[0].meanings[0].definitions[0].definition),
        console.log(data[0].phonetics[0].audio)
          ));
          
    }
  }
  useEffect(()=>{
    if(audio === ''){
      setaudioClass("redAudio")
    }
    else{
      setaudioClass("soundButton")
    }
  },[audio])
  const Sound = ()=>{
    const GetSound = new Audio(audio)
    GetSound.play()
  }
  const deleteWord =()=>{
    setWord('')
    setShowWord('')
    setphonetic('')
    setText('')
    setAudio('')
    setpartOfSpeech('')
    setdefinition('')
    setresultClass('hideResult')
  }
  return (
    <Animation>
    <div className='dictionary'>
      <div className='form'>
        <input type="text" placeholder='Enter Word' value={Word} onChange={getWord} />
        <button onClick={buttonFunction}><i className="fa fa-search"></i></button>
        <button onClick={deleteWord} className='trash'><i class="fa fa-trash"></i></button>
      </div>
      <div className={resultClass}>
        <h1>{showWord}</h1>
        <div className='resultDivider'></div>
        <h1>{phonetic}</h1>
        <div className='resultDivider'></div>
        <h1>{text}</h1>
        <div className='resultDivider'></div>
        <button className={audioClass} onClick={Sound}><i class="fa-solid fa-volume-high"></i></button>
        <div className='resultDivider'></div>
        <h1>{partOfSpeech}</h1>
        <div className='resultDivider'></div>
        <h1 className='definnition'>{definition}</h1>
      </div>
    </div>
    </Animation>
  )
}

export default Dictionary
