import { describe, expect, it } from '@jest/globals'
import { execute, Payload } from '../tests-to-implement/01_object_callback'

describe('object mock callback', () => {
  describe('execute', () => {
    it('calls the callback', () => {
      // Arrange
      const stub = jest.fn();
      const payload = {
        id: '1',
        amount: 10,
        callback: stub
      };

      // Act
      execute(payload);

      // Assert
      expect(stub).toBeCalled();
    })

    it('calls the callback once', () => {
      // Arrange
      const stub = jest.fn();
      const payload = {
        id: '1',
        amount: 10,
        callback: stub
      };

      // Act
      execute(payload);

      // Assert
      expect(stub).toBeCalledTimes(1);
    })

    it('calls the callback with correct value', () => {
      // Arrange
      const stub = jest.fn();
      const id = '1';
      const payload = {
        id,
        amount: 23,
        callback: stub
      };

      // Act
      execute(payload);

      // Assert
      expect(stub).toBeCalledWith(`230 for ${id}`);
    })
  })
})
