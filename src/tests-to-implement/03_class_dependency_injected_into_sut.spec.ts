import { describe, expect, it } from '@jest/globals'
import { PricingService } from "../dependencies/PricingService"
import { ItemPriceAdjuster } from './03_class_dependency_injected_into_sut';

jest.mock('../dependencies/PricingService');  // <= auto-mock the module
describe('ItemPriceAdjuster', () => {
  describe('price is less than 100', () => {
    it('marks item price up by the markup percentage', async () => {
      // Arrange
      const pricingServiceMock = PricingService as jest.MockedClass<typeof PricingService> as any;      
      pricingServiceMock.getMarkUpPercentage = jest.fn(() => 1);
      const item = {
        id: '3',
        name: 'item3',
        price: 55,
        description: 'Third Item',
        created: new Date()
      };
      var sut = new ItemPriceAdjuster(pricingServiceMock);
      // Act
      var result = await sut.adjustPrice(item);
      // Assert
      expect(result.price).toBe(55.55);
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
