import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = [
    { id: 1, title: '코드숨 과제하기' },
  ];

  const handleClick = jest.fn();

  const { container, getByText } = render((
    <Item
      task={task}
      onClickDelete={handleClick}
    />
  ));

  expect(container).toHaveTextContent('코드숨 과제하기');
  expect(handleClick).not.toBeCalled();

  fireEvent.click(getByText('완료'));

  expect(handleClick).toBeCalledWith(1);
});
