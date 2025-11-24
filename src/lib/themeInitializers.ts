import { themes } from '../config/themes';

export function initializePopArt(cards: NodeListOf<HTMLElement>) {
  const theme = themes['pop-art'];
  if (!theme.actionWords || !theme.colors) return;

  cards.forEach((card, index) => {
    // Random action words
    const randomWord = theme.actionWords![Math.floor(Math.random() * theme.actionWords!.length)];
    const randomColor = theme.colors![Math.floor(Math.random() * theme.colors!.length)];
    const randomRotation = Math.floor(Math.random() * 16) + 10;

    // Random positions
    const positions = [
      { top: '-40px', right: '-40px', bottom: 'auto', left: 'auto', topHover: '-20px', rightHover: '-20px', bottomHover: 'auto', leftHover: 'auto' },
      { top: '-40px', right: 'auto', bottom: 'auto', left: '-40px', topHover: '-20px', rightHover: 'auto', bottomHover: 'auto', leftHover: '-20px' },
      { top: 'auto', right: '-40px', bottom: '-40px', left: 'auto', topHover: 'auto', rightHover: '-20px', bottomHover: '-20px', leftHover: 'auto' },
      { top: 'auto', right: 'auto', bottom: '-40px', left: '-40px', topHover: 'auto', rightHover: 'auto', bottomHover: '-20px', leftHover: '-20px' }
    ];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];

    card.setAttribute('data-action-word', randomWord);
    card.style.setProperty('--action-color', randomColor);
    card.style.setProperty('--action-rotation', `${randomRotation}deg`);
    card.style.setProperty('--action-top', randomPosition.top);
    card.style.setProperty('--action-right', randomPosition.right);
    card.style.setProperty('--action-bottom', randomPosition.bottom);
    card.style.setProperty('--action-left', randomPosition.left);
    card.style.setProperty('--action-top-hover', randomPosition.topHover);
    card.style.setProperty('--action-right-hover', randomPosition.rightHover);
    card.style.setProperty('--action-bottom-hover', randomPosition.bottomHover);
    card.style.setProperty('--action-left-hover', randomPosition.leftHover);
  });
}

export function initializeWeb2(cards: NodeListOf<HTMLElement>) {
  const theme = themes['web2'];
  if (!theme.colors) return;

  cards.forEach((card, index) => {
    // Glossy badge colors
    const colorPairs: Array<[string, string]> = [
      ['#0084ff', '#0066cc'],
      ['#ff6b35', '#e65100'],
      ['#00d084', '#00a86b'],
      ['#9b59b6', '#8e44ad']
    ];
    const randomPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
    const randomPos = Math.floor(Math.random() * 4);

    card.style.setProperty('--action-color', randomPair[0]);
    card.style.setProperty('--action-color-dark', randomPair[1]);
    card.style.setProperty('--action-top', randomPos < 2 ? '12px' : 'auto');
    card.style.setProperty('--action-right', randomPos % 2 === 0 ? '12px' : 'auto');
    card.style.setProperty('--action-bottom', randomPos >= 2 ? '12px' : 'auto');
    card.style.setProperty('--action-left', randomPos % 2 === 1 ? '12px' : 'auto');
  });
}

export function initializeTheme(themeId: string, cards: NodeListOf<HTMLElement>) {
  // Add entrance animation delay for all themes
  cards.forEach((card, index) => {
    const delay = index * 50;
    card.style.animationDelay = `${delay}ms`;
    card.classList.add('card-entrance');
  });

  // Theme-specific initialization
  if (themeId === 'pop-art') {
    initializePopArt(cards);
  } else if (themeId === 'web2') {
    initializeWeb2(cards);
  }
}
