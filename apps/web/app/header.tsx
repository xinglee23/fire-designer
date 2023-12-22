'use client';
import { Flex, Button, Text } from '@radix-ui/themes';

function Header(): JSX.Element {
  const handleClick = () => {
    console.log('handle click');
  };

  return (
    <header className='flex h-18 p-4 items-center justify-between border-b'>
      <Text size='6' weight='bold'>
        Fire Designer
      </Text>
      <Flex gap='1'>
        <Button onClick={handleClick}>preview</Button>
        <Button>save</Button>
        <Button>publish</Button>
      </Flex>
    </header>
  );
}

export default Header;
