// Barrel export для всех стилей
// Позволяет импортировать стили как модули в компонентах

export const stylesManifest = {
  base: [
    'tailwind.css',
    'fonts.css', 
    'typography.css'
  ],
  components: [
    'buttons.css',
    'cards.css',
    'elements.css'
  ],
  layouts: [
    'containers.css',
    'header.css'
  ],
  mobile: [
    'animations.css',
    'menu.css',
    'hero.css'
  ],
  browserFixes: [
    'mobile-browsers.css',
    'scrollbars.css'
  ]
};

// Метаданные для разработки
export const stylesMetadata = {
  totalFiles: 11,
  maxLinesPerFile: 120,
  totalLines: 'reduced from 1190 to modular structure',
  architecture: 'modular CSS with strict line limits'
};
