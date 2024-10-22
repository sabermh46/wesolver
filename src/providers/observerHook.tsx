import { useEffect, useState, useCallback } from 'react';
import { useIntersectionObserver } from './IntersectionObserverProvider';

export const useVisibilityObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, unregister } = useIntersectionObserver();

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        console.log('Node passed to ref:', node);
        register(node, (entry) => setIsVisible(entry.isIntersecting));
      }
    },
    [register]
  );

  // Clean up observer on unmount
  useEffect(() => {
    return () => {
      if (refCallback) {
        unregister(refCallback as unknown as HTMLElement); // Ensure the node gets unregistered
      }
    };
  }, [refCallback, unregister]);

  return { ref: refCallback, isVisible };
};
