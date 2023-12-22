import { Text } from '@radix-ui/themes';
import { useRecoilValue } from 'recoil';
import { pageState } from '../store';

export default function Right(): JSX.Element {
  const curPageState = useRecoilValue(pageState);
  const { name, posRect } = curPageState[0];

  return (
    <div className='w-[300px] border-l'>
      <div className='w-full text-left'>
        <div className='w-full flex justify-between items-center h-18 p-3 text-left border-b'>
          <Text weight='bold'>Setting Panel</Text>
        </div>
        <div>id: {name}</div>
        <div>x: {posRect.x}</div>
        <div>y: {posRect.y}</div>
      </div>
    </div>
  );
}
