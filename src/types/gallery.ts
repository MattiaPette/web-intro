export interface FruitOption {
  label: string
}

export interface GalleryFormState {
  text: string
  multiline: string
  select: string
  autocomplete: FruitOption | null
  radio: string
  switchChecked: boolean
  checkboxChecked: boolean
  rating: number | null
  slider: number
}

export const DEFAULT_GALLERY_FORM: GalleryFormState = {
  text: '',
  multiline: '',
  select: '',
  autocomplete: null,
  radio: 'card',
  switchChecked: true,
  checkboxChecked: false,
  rating: 3,
  slider: 40,
}