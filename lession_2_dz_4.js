var a = +prompt ('Введите значение от 0 до 15', '')
    switch (a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    alert ("Ввели число меньше загаданого");
    break;
    case 7:
    alert ("Все правильно это число 7");
      break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    alert ("Ввели число больше загаданого");
    break;

    default :
      alert( "Ввели число больше 15" )

  }
