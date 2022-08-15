import { ReactNode, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { currentSectionState } from '../recoil/currentSection/atom';

interface Props {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: Props) => {
  const [currentSection, setCurrentSection] = useRecoilState(currentSectionState);
  const ref = useRef<HTMLElement>(null);

  function ioCallback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    entry.isIntersecting && setCurrentSection(id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(ioCallback, { rootMargin: '-50%' });
    ref.current && observer.observe(ref.current);

    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref]);

  useEffect(() => {
    currentSection === id && window.history.replaceState(null, '', id === 'home' ? '/' : `/#${id}`);
  }, [currentSection]);

  return (
    <>
      <section id={id} ref={ref} style={{ position: 'relative' }}>
        {children}
      </section>
    </>
  );
};

export default Section;
