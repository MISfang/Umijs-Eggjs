import { useEffect } from 'react';
/**
 * @param  {string} ele
 * @param  {Function} callBack
 * @param  {any[]|null} watch?
 */
let observer: any;
export default function useObserverHook(
  ele: string,
  callBack: Function,
  watch?: any[] | null,
) {
  useEffect(() => {
    const node = document.querySelector(ele);
    if (node) {
      observer = new IntersectionObserver((entries) => {
        if (callBack) {
          setTimeout(() => {
            callBack(entries);
          }, 300);
        }
      });
      observer.observe(node);
    }

    return () => {
      if (observer && node) {
        observer.unobserve(node);
        observer.disconnect();
      }
    };
  }, watch!);
}
