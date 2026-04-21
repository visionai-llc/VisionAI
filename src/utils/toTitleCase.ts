export function toTitleCase(text: string): string {
  if (!text) return '';
  
  return text
    .toLowerCase()
    // Capitalize first letter of words, also after hyphens and parentheses
    .replace(/(?:^|\s|-|\()([a-z])/g, (match) => match.toUpperCase())
    .replace(/\bAi\b/ig, 'AI')
    .replace(/\bBot\b/ig, 'BOT');
}
