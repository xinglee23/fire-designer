'use client';
import { Separator, Tooltip } from '@radix-ui/themes';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ZoomInIcon, ZoomOutIcon, ResetIcon } from '@radix-ui/react-icons';
import Vessel from '../components/vessel';

export default function Middle(): JSX.Element {
  return (
    <div className='flex items-center flex-wrap justify-center w-[60%]'>
      <div className='w-full flex justify-end'>
        <div className='flex w-40 justify-between items-center h-18 p-4'>
          <Tooltip content='zoom in'>
            <ZoomInIcon className='cursor-pointer' />
          </Tooltip>
          <Tooltip content='zoom out'>
            <ZoomOutIcon className='cursor-pointer' />
          </Tooltip>
          <Separator orientation='vertical' />
          <Tooltip content='reset'>
            <ResetIcon className='cursor-pointer' />
          </Tooltip>
        </div>
      </div>
      <div className='h-[100vh] w-96 bg-slate-200'>
        <DndProvider backend={HTML5Backend}>
          <Vessel snapToGrid />
        </DndProvider>
      </div>
    </div>
  );
}
