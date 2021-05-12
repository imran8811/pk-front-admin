export interface IImageUpload {
  id: string,
  imageFront: string,
  imageBack: string,
  sizeChart: string,
  imageOne: string,
  imageTwo: string,
  imageThree: string
}

export class ImageUpload implements IImageUpload {
  id = '';
  imageFront = '';
  imageBack = '';
  sizeChart = '';
  imageOne = '';
  imageTwo = '';
  imageThree = '';
}
