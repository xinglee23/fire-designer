'use client';

import Header from './header';
import { RecoilRoot } from 'recoil';
import { Theme } from '@radix-ui/themes';
import Container from './container';

export default function Page(): JSX.Element {
  return (
    <RecoilRoot>
      <Theme
        accentColor='blue'
        appearance='light'
        grayColor='sand'
        radius='large'
        scaling='100%'
      >
        <div>
          <Header />
          <Container />
          {/* <TodoList /> */}
        </div>
      </Theme>
    </RecoilRoot>
  );
}
