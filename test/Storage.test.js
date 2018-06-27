import Storage from '@/Storage';

describe('Storage', () => {
  const storage = new Storage();
  // Mock hasLocalStorage
  storage.hasLocalStorage = true;

  it('Has default properties', () => {
    expect(storage).toBeInstanceOf(Storage);
    expect(storage.key).toBe('COOKSENT');
  });

  it('Get key value', () => {
    const { hasOptIn } = storage;
    expect(hasOptIn).toBeFalsy();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Sets key value', () => {
    storage.hasOptIn = true;
    expect(storage.hasOptIn).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenLastCalledWith(storage.key, 1);
  });

  it('Remove key value', () => {
    storage.empty();
    expect(storage.hasOptIn).toBeFalsy();
    expect(localStorage.removeItem).toHaveBeenLastCalledWith(storage.key);
  });

  // it('Times', () => {
  //   expect(timer.exec(() => {})).toBeTruthy();
  // });

  // it('Times even if the console doesn\'t implement it', () => {
  //   console.time = null;
  //   console.timeEnd = null;
  //   expect(timer.exec(() => {})).toBeTruthy();
  // });
});
