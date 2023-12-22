'use client';
import { useState } from 'react';
import { Text } from '@radix-ui/themes';
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';

export default function Left(): JSX.Element {
  const [collapse, setCollapse] = useState(true);

  const componentNameList = [
    'Button',
    'Card',
    'Checkbox',
    'Container',
    'Flex',
    'Grid',
    'Heading',
    'Image',
    'Link',
    'Paragraph',
    'Radio',
    'Text',
    'TextField',
    'View',
    'Button2',
    'Card1',
    'Checkbox1',
    'Container1',
    'Flex1',
    'Grid1',
    'Heading1',
    'Image1',
    'Link1',
    'Paragraph1',
    'Radio1',
    'Text1',
    'TextField1',
    'View1',
    'Text0',
    'Text6',
    'Text223',
    'TextField3',
    'View3',
    'View1',
    'Text0',
  ];

  const handleCollapse = (): void => {
    setCollapse(!collapse);
  };

  return collapse ? (
    <div className='flex flex-wrap w-[320px] h-full border-r overflow-auto'>
      <div className='w-full flex justify-between items-center h-18 p-3 text-left border-b'>
        <Text weight='bold'>Components</Text>
        <DoubleArrowLeftIcon
          className='cursor-pointer'
          onClick={handleCollapse}
        />
      </div>
      {componentNameList.map((v) => (
        <div
          className='w-32 h-8 m-2 p-1 text-center bg-slate-300 rounded cursor-pointer'
          key={v}
        >
          {v}
        </div>
      ))}
    </div>
  ) : (
    <DoubleArrowRightIcon className='ml-3' onClick={handleCollapse} />
  );
}
