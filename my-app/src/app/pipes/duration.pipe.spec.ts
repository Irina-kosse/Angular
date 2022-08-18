import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return formated duration', () => {
    expect(pipe.transform(90)).toBe('1h30m');
  });
});
