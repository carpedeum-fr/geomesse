const gridSize = 8;

export default {
  font: {
    fontSize: {
      small: 11,
      default: 13,
      big: 15,
      large: 17,
      huge: 20,
    },
    weight: {
      light: '300',
      semiBold: '600',
      bold: '900',
    },
  },
  colors: {
    primary: '#05A5D1',
    lightText: '#FAFAFA',
    background: '#F5FCFF',
  },
  grid: {
    x1: gridSize * 1,
    x2: gridSize * 2,
    x3: gridSize * 3,
    x4: gridSize * 4,
    x5: gridSize * 5,
    x6: gridSize * 6,
    x8: gridSize * 8,
    x9: gridSize * 9,
    x10: gridSize * 10,
    x12: gridSize * 12,
    x14: gridSize * 14,
    x16: gridSize * 16,
  },
  dimensions: {
    touchableHeight: 48,
    visibleButtonHeight: 36,
  },
};
