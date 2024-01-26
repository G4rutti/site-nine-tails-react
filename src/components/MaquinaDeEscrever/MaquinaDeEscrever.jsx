import { useState, useEffect } from "react"

const MaquinaDeEscrever = ({texto, delay}) => {
    const [text, setText] = useState("")
    const escreverNaTela = (text, i = 0) => {
        if (i < text.length){
            setText(text.slice(0, i + 1))
            setTimeout(() => escreverNaTela(text, i + 1), delay ?? 200)
        }
    }
    useEffect(() => {
        setTimeout(() => escreverNaTela(texto))
    }, [])

  return (
    <>
        {text}
    </>
  )
}

export default MaquinaDeEscrever