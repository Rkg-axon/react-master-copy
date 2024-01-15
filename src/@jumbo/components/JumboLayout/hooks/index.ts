import { useContext } from 'react';
import { JumboLayoutContext } from '..';

function useJumboLayout() {
  return useContext(JumboLayoutContext);
}

export { useJumboLayout };
