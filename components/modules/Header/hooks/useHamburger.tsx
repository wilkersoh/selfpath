import {useState} from 'react'

const useHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
    // avoid page scrollable in body after open hambuger
    document.body.classList.toggle("overflow-hidden");
  };

  return {
    onToggleOpen,
    isOpen,
    setIsOpen
  }
}

export default useHamburger
