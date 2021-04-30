import { describe, expect, it } from '@jest/globals'

export const inject = <Dependencies, FunctionFactory>(
  buildFunction: (dependencies: Dependencies) => FunctionFactory,
  buildDependencies: () => Dependencies
) => (dependencies = buildDependencies()) => ({
  execute: buildFunction(dependencies),
  dependencies,
});

describe('ItemPriceAdjuster', () => {
  describe('price is less than 100', () => {
    it.skip('marks item price up by the markup percentage', async () => {
      // Arrange
      const item = {
        id: '1',
        name: 'item1',
        price: 12,
        description: 'New Item',
        created: new Date()
      };
      
      // Act
      
      // Assert
      expect('not to finish');
    })
  })

  describe('price is greater than 100', () => {
    it.skip('marks item price down by the markdown percentage', async () => {
      // Arrange
      // Act
      // Assert
    })
  })

  describe('price is equal to 100', () => {
    it.skip('will not alter the price', async () => {
      // Arrange
      // Act
      // Assert
    })
  })
})
