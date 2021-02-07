# game-of-life

Перед вами CLI приложение игры "Жизнь".

## Игру можно запустить в двух режимах:

1. рандом - для этого необходимо ввести команду `node app.js random`. 
В этом случае первое состояние доски, а также её длина и ширина генерируются случайным образом.

Для целей корректного отображения игры в режиме "random" на небольших экранах/небольших окошках терминала и соответствия правилам игры установлены ограничители максимального и минимального размера доски. С учетом используемой формулы при текущих значениях констант - максимальная длина и ширина доски - 10 клеток, а площадь, соответственно - 100 клеток, минимальная длина и ширина - 3 клетки, а площадь, соответственно - 9 клеток). Вместе с тем, при необходимости, изменить указанные ограничители, задав нужные значения константам в файле consts.js - './utils/consts.js'.

2. файл - для этого необходимо ввести команду `node app.js file --path <filepath>`.

В этом случае первое состояние доски, а также её длина и ширина берутся из файла. 
Файл должен содержать информацию следующего вида:
`4
4
0000
0110
0110
0000`

Первая строка обозначает ширину доски, вторая - высоту, третья и последующие - ряды с клетками. Состояние (значение) клеток может быть равно 0 (мёртвая клетка) и 1 (живая клетка).

При этом, количество клеток в ряде (символов в третьей и каждой последующей строке) должно быть равно результату умножения значений первой и второй строки (ширины и высоты доски). Кроме того, количество рядов с клетками должно быть равно значению второй строки файла - высоте доски. 

В случае несоответствия данных в файле указанным выше правилам и формату произойдет ошибка валидации.

## Игра подчиняется следующим правилам:
В консоль выводится доска размером, заданным рандомно или прочитанным из файла. Клетка может находиться в одном из двух состояний: живая или мёртвая. Каждая клетка взаимодействует с восемью соседями. 

Каждую секунду в консоль выводится новое состояние доски, которое зависит от предыдущего следующим образом:

1. живая клетка, у которой меньше двух живых соседей, погибает.
2. живая клетка, у которой два или три живых соседа, выживает.
3. живая клетка, у которой больше трёх живых соседей, погибает.
4. мёртвая клетка, у которой три живых соседа, возрождается.