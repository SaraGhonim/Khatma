const colors = {
  primary: '#f4d6b2',
  secondary : '#0d3a69',
  primary3:  '#faeedf' ,
  primary4: '#f4d6b2' ,
  alert: '#cc4b37',
  gray1: '#F7F8FA',
  gray2: '#e6e6e6',
  gray3: '#cacaca',
  gray4: '#8a8a8a',
  'white-transparent100': 'rgba(255, 255, 255, 0.1)',
  'white-transparent200': 'rgba(255, 255, 255, 0.2)',
  'white-transparent300': 'rgba(255, 255, 255, 0.3)',
  'white-transparent400': 'rgba(255, 255, 255, 0.4)',
  'white-transparent500': 'rgba(255, 255, 255, 0.5)',
  'white-transparent600': 'rgba(255, 255, 255, 0.6)',
  'white-transparent700': 'rgba(255, 255, 255, 0.7)',
  'white-transparent800': 'rgba(255, 255, 255, 0.8)',
  'white-transparent900': 'rgba(255, 255, 255, 0.9)',
  'black-transparent100': 'rgba(0, 0, 0, 0.1)',
  'black-transparent200': 'rgba(0, 0, 0, 0.2)',
  'black-transparent300': 'rgba(0, 0, 0, 0.3)',
  'black-transparent400': 'rgba(0, 0, 0, 0.4)',
  'black-transparent500': 'rgba(0, 0, 0, 0.5)',
  'black-transparent600': 'rgba(0, 0, 0, 0.6)',
  'black-transparent700': 'rgba(0, 0, 0, 0.7)',
  'black-transparent800': 'rgba(0, 0, 0, 0.8)',
  'black-transparent900': 'rgba(0, 0, 0, 0.9)',
};

const fontSize = {
  icon: 50,
  '7xl': 64,
  '8xl': 75,
};
const sizes = {
  '2xl': 32,
  '3xl': 64,
  lg: 12,
  md: 8,
  none: 0,
  sm: 6,
  xl: 24,
  xs: 4,
  '6xl': 64,
  icon: 100,
  '7xl': 128,
  '8xl': 80,
};

const theme = {
  fontSize,
  spacing: {
    ...sizes,
  },
};
const Light = {
  name: 'light',
  dark: false,
  colors: {
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    surface: '#FFFFFF',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    error: '#B00020',
    success: '#388e3c',
    warning: '#f57c00',
    info: '#1976d2',
    primaryText: 'rgba(0, 1, 1, .87)',
    secondaryText: 'rgba(1, 1, 1, .54)',
    disabledText: 'rgba(1, 1, 1, .38)',
    divider: 'rgba(1, 1, 1, .12)',
    ...colors,
  },
  ...theme,
};
console.log('light', Light);
const Dark = {
  name: 'dark',
  dark: true,
  colors: {
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    surface: '#121212',
    primaryText: 'rgba(255, 255, 255, 1)',
    secondaryText: 'rgba(255, 255, 255, .7)',
    disabledText: 'rgba(255, 255, 255, .5)',
    divider: 'rgba(255, 255, 255, .12)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
    error: '#CF6679',
    success: '#81c784',
    warning: '#ffb74d',
    info: '#64b5f6',
    ...colors,
  },
  ...theme,
};
const THEMES = {
  light: Light,
  dark: Dark,
  sizes,
};

export default THEMES;
