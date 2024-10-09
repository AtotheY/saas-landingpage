import { useEffect, type RefObject } from "react"

interface UseClickOutsideProps {
  containerRef: RefObject<HTMLElement>
  childRef: RefObject<HTMLElement>
  isActive: boolean
  toggle: () => void
}

const useClickOutside = ({ containerRef, childRef, isActive, toggle }: UseClickOutsideProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      childRef.current &&
      !childRef.current.contains(event.target as Node)
    ) {
      toggle()
      event.stopPropagation()
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [isActive, containerRef, childRef, toggle])
};

export default useClickOutside