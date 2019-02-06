import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360
const guidelineBaseHeight = 592

export const printDimensions = () => {
  console.log(`width, height ${width}, ${height}`)
}

export const scaleHorizontalSize = (targetSize) => {
  return (width / guidelineBaseWidth) * targetSize
}

export const scaleVerticalSize = (targetSize) => {
  return (height / guidelineBaseHeight) * targetSize
}

export const scaleSizeWithAspectRatio = (targetSize) => {
  return (guidelineBaseWidth / width) * (height / guidelineBaseHeight) * targetSize
}