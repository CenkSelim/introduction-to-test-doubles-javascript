const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test('should generate random bubble tea', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('should generate random bubble tea of peach variety', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.6
  jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
  // Act
  const bubbleTea = getRandomBubbleTeaType();
  // Assert
  expect(bubbleTea).toBe('PEACHICETEA');
  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

test.each`
  input | expected
  ${0.0} | ${'OOLONGMILKTEA'}
  ${0.2} | ${'JASMINEMILKTEA'}
  ${0.4} | ${'MATCHAMILKTEA'}
  ${0.6} | ${'PEACHICETEA'}
  ${0.8} | ${'LYCHEEICETEA'}
`('getRandomBubbleTeaType $input should be $expected', ({input, expected}) => {
  jest.spyOn(global.Math, 'random').mockReturnValue(input);
  expect(getRandomBubbleTeaType()).toBe(expected);
  jest.spyOn(global.Math, 'random').mockRestore();
});
