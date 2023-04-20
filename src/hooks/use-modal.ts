import { useState } from 'react'

export const useModal = () => {
  const [isVisible, setVisible] = useState(false)

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  return {
    isVisible,
    openModal,
    closeModal,
  }
}
