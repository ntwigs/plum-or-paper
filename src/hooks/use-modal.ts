import { useState } from 'react'

type UseModal = {
  initialState?: boolean
}
export const useModal = ({ initialState = false }: UseModal = {}) => {
  const [isVisible, setVisible] = useState(initialState)

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
