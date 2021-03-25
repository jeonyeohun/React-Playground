import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('confirmed');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('canceled');
    setDialog(false);
  };
  return (
    // theme 객체 설정 필요
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size='large' color='gray'>
              Button
            </Button>
            <Button size='medium' color='pink'>
              Button
            </Button>
            <Button size='small' color='blue'>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' color='gray'>
              Button
            </Button>
            <Button size='medium' color='pink'>
              Button
            </Button>
            <Button size='small' color='blue'>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' color='gray' outline>
              Button
            </Button>
            <Button size='medium' color='pink' outline>
              Button
            </Button>
            <Button size='small' color='blue' outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' color='gray' fullWidth>
              Button
            </Button>
            <Button size='large' color='pink' fullWidth>
              Button
            </Button>
            <Button size='large' color='blue' fullWidth onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title='정말로 삭제하시겠습니까?'
          confirmText='삭제'
          cancelText='취소'
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
