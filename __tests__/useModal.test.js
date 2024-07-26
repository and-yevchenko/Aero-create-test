import { act, renderHook } from '@testing-library/react';
import { useModal } from '../src/hooks/useModal';

describe('useModal Hook', () => {
  jest.useFakeTimers();

  test('should initialize with modal closed and no animation', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.open).toBe(false);
    expect(result.current.animation).toBe('in');
  });

  test('should open modal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.open).toBe(true);
    expect(result.current.animation).toBe('in');
  });

  test('should close modal with animation', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.onOpen();
    });

    act(() => {
      result.current.onClose();
    });

    expect(result.current.animation).toBe('out');
    jest.advanceTimersByTime(200);
    expect(Object.is(result.current.open)).toBe(false);
  });

  test('should handle Escape key press to close modal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.onOpen();
    });

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(event);
    });

    expect(result.current.animation).toBe('out');
    jest.advanceTimersByTime(200);
    expect(Object.is(result.current.open)).toBe(false);
  });
});
