import { useEffect } from "react"

const Message = () => {

  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    }
  }, [])
  

  return (
    <>
      Usuario ya existe
    </>
  )
}

export default Message