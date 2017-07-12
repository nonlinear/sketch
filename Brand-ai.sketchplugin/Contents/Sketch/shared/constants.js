module.exports = {
  IMAGE_CATS: {
    icons: {
      categoryKey: 'iconSections',
      itemsKey: 'icons',
      displayNamePlural: 'Icons',
      preferPNGFormat: false,
      extensionsToUpload: ['png', 'skla', 'svg']
    },
    images: {
      categoryKey: 'imageSections',
      itemsKey: 'images',
      displayNamePlural: 'Images',
      preferPNGFormat: true,
      extensionsToUpload: ['png', 'skla']
    },
    componentImages: {
      categoryKey: 'componentImageSections',
      itemsKey: 'components',
      displayNamePlural: 'UI Components',
      preferPNGFormat: true,
      extensionsToUpload: ['png', 'skla']
    }
  },
  TYPES_TO_SYNC: {
    colors: { key: 'colors', label: 'Colors', description: 'Added to “Document Colors”' },
    typeStyles: { key: 'typeStyles', label: 'Text Styles' },
    sharedStyles: { key: 'sharedStyles', label: 'Layer Styles' },
    symbols: { key: 'symbols', label: 'Symbols' }
  },
  INDEX: {
    fontPSName: 0,
    fontFaceName: 1,
    fontWeight: 2,
    fontTraits: 3
  }
};
