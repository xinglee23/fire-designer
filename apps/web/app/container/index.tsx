'use client';

import Left from './left';
import Right from './right';
import Middle from './middle';

export default function Container(): JSX.Element {
  return (
    <div className='h-full flex justify-between'>
      <Left />
      <Middle />
      <Right />
    </div>
  );
}
