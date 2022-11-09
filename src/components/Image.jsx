import { useState } from "react"

const Image = (props) => {
  const [state, setState] = useState({
    src: props.src,
    isError: false
  })

  const onError = () => {
    if (!state.isError) {
      setState({
        src: props.fallbackSrc,
        isError: true
      })
    }
  }

  return (
    <props.as
      // {...props}
      src={state.src}
      onError={onError}
    />
  )
}

export default Image