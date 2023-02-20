//Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

//Реализовать String#digit? (в Java StringUtils.isDigit(String)), который должен возвращать true, если данный объект является цифрой (0-9), иначе false

String.prototype.digit = function(num) {
  if (num = 0 && num < 10 ) {
    return true;
  } else {
    return false;
  }
  
};