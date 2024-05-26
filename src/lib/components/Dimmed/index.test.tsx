import { Dimmed } from '@/lib/components/Dimmed';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

test('dimmed를 클릭하면 onClose가 실행된다.', async () => {
  const onCloseMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  const user = userEvent.setup();

  render(<Dimmed isOpen={true} onClose={() => console.log('close')} />);
  const dimmed = screen.getByTestId('dimmed-testid');

  await user.click(dimmed);
  expect(onCloseMock).toHaveBeenCalled();
  expect(onCloseMock).toHaveBeenCalledWith('close');
});

test('dimmed를 클릭하지 않고 children 컴포넌트를 클릭하면 onClose가 실행되지 않는다.', async () => {
  const onCloseMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  const user = userEvent.setup();
  const TestComponent = () => {
    return (
      <>
        <Dimmed isOpen={true} onClose={() => console.log('close')}>
          <div>modal body</div>
        </Dimmed>
      </>
    );
  };
  render(<TestComponent />);
  const modalBody = screen.getByText('modal body');
  await user.click(modalBody);
  expect(onCloseMock).not.toHaveBeenCalled();
});
