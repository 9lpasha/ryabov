export function generatePassword(length = 12) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Объединяем все символы
  const allCharacters = uppercase + lowercase + numbers + symbols;

  // Минимум по одному символу каждого типа
  const randomUppercase =
    uppercase[Math.floor(Math.random() * uppercase.length)];
  const randomLowercase =
    lowercase[Math.floor(Math.random() * lowercase.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  let password =
    randomUppercase + randomLowercase + randomNumber + randomSymbol;

  // Заполняем оставшуюся длину случайными символами
  for (let i = 4; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Перемешиваем символы для большей случайности
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
}
