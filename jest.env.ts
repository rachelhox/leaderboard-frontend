/* eslint-disable no-undef */
global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;

export {};
