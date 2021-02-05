# game-of-life

Перед вами CLI приложение знаменитой игры "Жизнь".

## Игра подчиняется следующим правилам:
В консоль выводится доска размером M × N клеток. Клетка может находиться в одном из двух состояний: живая или мёртвая. Каждая клетка взаимодействует с восемью соседями. 

Каждую секунду в консоль выводится новое состояние доски, которое зависит от предыдущего следующим образом:

1. живая клетка, у которой меньше двух живых соседей, погибает.
2. живая клетка, у которой два или три живых соседа, выживает.
3. живая клетка, у которой больше трёх живых соседей, погибает.
4. мёртвая клетка, у которой три живых соседа, возрождается.

## Игру можно запустить в двух режимах:

1. рандом - для этого необходимо ввести команду `node app.js random`. 
В этом случае первое состояние доски, а также её длина и ширина генерируются случайным образом.
2. файл - для этого необходимо ввести команду `node app.js file --path <filepath>`.
В этом случае первое состояние доски, а также её длина и ширина берутся из файла. 
Файл должен содержать информацию следующего вида:

При этом, количество элементов массива cells должно быть равно результату умножения значений переменных width на height, иначе игра не будет запущена.

Для целей корректного отображения игры в режиме "random" на небольших экранах/небольших окошках терминала установлены ограничители максимальной длины и высоты доски (с учетом используемой формулы, при текущих значениях WIDTH_LIMIT и HEIGHT_LIMIT - максимальная длина и ширина доски - 10 клеток, а площадь, соответственно - 100 клеток). Вместе с тем, при необходимости, их можно изменить указанные параметры, задав нужные значения константам WIDTH_LIMIT и HEIGHT_LIMIT в файле consts.js - './utils/consts.js'.