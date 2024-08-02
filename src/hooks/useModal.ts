import { useState } from 'react'

function useModal(showByDefault = false) {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(showByDefault)
  const showModal = () => setIsShowingModal(true)
  const hideModal = () => setIsShowingModal(false)

  return { isShowingModal, showModal, hideModal }
}

export default useModal
