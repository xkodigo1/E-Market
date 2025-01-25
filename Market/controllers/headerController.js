export function generateInvoiceNumber() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetters = Array.from(
      {length: 3}, 
      () => letters[Math.floor(Math.random() * letters.length)]
  ).join('');
  
  const randomNumbers = Math.floor(100000 + Math.random() * 900000);
  
  return `${randomLetters}-${randomNumbers}`;
}
