import { setPauseTime } from '@/store/slices/paramsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



export default function usePageVisibility(handleStop: ()=>void) {
    const dispatch = useDispatch()

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handleStop()
        // dispatch(setPauseTime(true))
        
      } 
   
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
