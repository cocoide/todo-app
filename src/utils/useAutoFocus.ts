import { useEffect, useRef } from 'react';


export default function useAutoFocus<RefType extends HTMLElement>() {
  const inputRef = useRef<RefType>(null);

useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, []);

  return inputRef;
}