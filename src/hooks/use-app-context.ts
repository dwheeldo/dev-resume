import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types/interfaces';

export default function useAppContext() {
  return useContext(AppContext) as AppContextType;
}
