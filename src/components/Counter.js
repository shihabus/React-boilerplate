import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../elements/Button';
import { incrementCounter, decrementCounter } from 'redux/actions/counter';
import { counterSelector } from 'redux/selectors/counter';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);

  function onIncrement() {
    dispatch(incrementCounter());
  }

  function onDecrement() {
    dispatch(decrementCounter());
  }

  return (
    <Container>
      <Button onClick={onIncrement}>+</Button>
      <h3>{count}</h3>
      <Button onClick={onDecrement}>-</Button>
    </Container>
  );
}
