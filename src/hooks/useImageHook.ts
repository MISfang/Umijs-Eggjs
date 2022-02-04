/**
 * @param  {string} ele
 * @param  {Function} callBack
 * @param  {} watch=[]
 */

import { useEffect } from 'react';
import { isEmpty } from 'project-libs';
let observer: any;
export default function useImageHook(
  ele: string,
  callBack: Function,
  watch: any[] | null = [],
) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    if (!isEmpty(nodes)) {
      observer = new IntersectionObserver((entries) => {
        callBack && callBack(entries);
        entries.forEach((item) => {
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute('src', dataSrc!);
            observer.unobserve(item.target);
          }
        });
      });

      nodes.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (!isEmpty(nodes) && observer) {
        observer.disconnect();
      }
    };
  }, watch as any[]);
}
