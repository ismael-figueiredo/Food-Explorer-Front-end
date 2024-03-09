import React, { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import { LuInfo, LuCheck, LuXOctagon } from "react-icons/lu"
import { Container, Message, ProgressBar, CloseButton } from "./styles"
import { useAlert } from "../../hooks/alert"

export function Alert() {
  const { alert, hideAlert } = useAlert()
  const { visible, message, type } = alert
  const [progress, setProgress] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    let intervalId
    if (visible) {
      setProgress(0)
      intervalId = setInterval(() => {
        setProgress((currentProgress) => {
          if (currentProgress < 100) {
            return currentProgress + 5
          }
          clearInterval(intervalId)
          return currentProgress
        })
      }, 100)
      
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [visible])

  useEffect(() => {
    if (progress >= 100) {
      setIsClosing(true)
      setTimeout(() => {
        setIsClosing(false)
        hideAlert()
      }, 500) 
    }
  }, [progress])

  const handleCloseClick = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      hideAlert()
    }, 100) 
  }

  if (!visible && !isClosing) return null

  const Icon = () => {
    switch (type) {
      case "danger":
        return <LuXOctagon size="1.5em" color="red" />
      case "success":
        return <LuCheck size="1.5em" color="green" />
      case "warning":
        return <LuInfo size="1.5em" color="orange" />
      default:
        return null
    }
  }

  return (
    <Container $type={type} $visible={!isClosing}>
      <Icon />
      <Message>{message}</Message>
      <ProgressBar $progress={progress} $type={type} />
      <CloseButton onClick={handleCloseClick}>
        <IoMdClose color="white" size="1.5em"/>
      </CloseButton>
    </Container>
  )
}
