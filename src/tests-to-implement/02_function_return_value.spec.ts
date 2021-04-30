import { describe, expect, it } from '@jest/globals'
import { getAllItemsOnSale } from '../tests-to-implement/02_function_return_value'
import * as objectGetAll from '../dependencies/get_all'

describe('function mock return value', () => {
  describe('getAllItemsOnSale', () => {
    it('returns only prices under 10', async () => {
      // Arrange
      const items = [{
        id: '1',
        name: 'item1',
        price: 12,
        description: 'New Item',
        created: new Date()
      }, {
        id: '2',
        name: 'item2',
        price: 5,
        description: 'Second Item',
        created: new Date()
      }];

      jest.spyOn(objectGetAll, 'getAll').mockResolvedValue(items);

      // Act
      const results = await getAllItemsOnSale();

      // Assert
      expect(results.length).toBe(1);
      expect(results[0].id).toBe('2');
      expect(results[0].price).toBe(5);
    })
  })
})
