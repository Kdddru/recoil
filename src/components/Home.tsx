import React, { useCallback, useEffect } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'


const textState = atom({
  key : 'textState',
  default : ''
})

const charCountState = selector({
  key : 'charCountState',
  get : ({get})=>{
    const text = get(textState);

    return text.length
  }
})


function TextInput(){
  const [text, setText] = useRecoilState(textState);

  const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  },[setText])

  
  useEffect(()=>{
    if(text){
      console.log(text);
    }
  },[text])

  return(
    <div>
      <input type='text' onChange={onChange}/>
      <br/>
      Echo : {text}
    </div>
  )
}

function CharacterCount(){
  const count = useRecoilValue(charCountState);

  return(
    <>
      Character Count : {count}
    </>
  )
}


export default function Home() {
  return (
    <div>
      Home
      <TextInput/>
      <CharacterCount/>
    </div>
  )
}
