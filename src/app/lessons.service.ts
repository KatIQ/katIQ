import { EventEmitter, Injectable } from '@angular/core';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  protected lessons: Lesson[] = [
    {
      title: "Саксонская чаша",
      section: "Hydrodynamics",
      subject: "Physics",
      language: "rus",
<<<<<<< HEAD
      link: "https://www.youtube.com/embed/eaMWu4OUtMw",
      description: "!Введение:!@Саксонская чаша представляет собой уникальное устройство, использовавшееся саксами для измерения времени. Это чаша с отверстием в дне, которая утонет, если её поместить на воду. В данной работе мы исследуем параметры, влияющие на время затопления такой чаши.@@!Теоретическая часть!@!Закон Архимеда!@На тело, погруженное в жидкость (газ), действует выталкивающая сила, направленная вертикально вверх и равная весу жидкости (газа) в объеме погруженного тела или его части.@@!Закон Бернулли!@Для потока идеальной несжимаемой жидкости сумма давлений, кинетической и потенциальной энергии на единицу объема остается постоянной. @@!Смачивание и несмачивание!@Смачивание — это результат взаимодействия между молекулами жидкости, твёрдого тела и газа, которое приводит к искривлению поверхности жидкости около поверхности твёрдого тела на границе с газом. Несмачивание, напротив, происходит, когда жидкость не распределяется равномерно по поверхности твердого тела, образуя капли.@@!Поверхностное натяжение!@Сила, возникающая на поверхности раздела двух фаз (жидкой и газообразной) и стремящаяся сократить поверхность до возможного минимума.@@!Практическая часть!@1. В сосудах с разным диаметром дна и из разного материала проделали отверстия диаметром 4 мм, 7 мм, 20 мм.@2. Приготовили различные растворы: вода питьевая, мыльный раствор и солевой раствор.@3. Проводили эксперименты по затоплению чаш из разных материалов, с разными диаметрами дна D и диаметрами отверстий d в различных растворах жидкостей.@4. Покрыли чаши увлажняющим кремом и сливочным маслом 82% и исследовали, как зависит время затопления чаш.@@!Результаты экспериментов!@!1. Зависимость времени затопления чаши от диаметра отверстия!@*https://drive.google.com/file/d/1tfVJBq43DYww1kg_V_IC7_qcRJcZOBQp/view?usp=sharing*@Вывод: Время затопления чаши прямо пропорционально зависит от диаметра отверстия.@@!2. Зависимость времени затопления от диаметра дна (массы чаши)!@* https://drive.google.com/file/d/1Xy-CnoxaF9jeIZbVq4rxd1qrwH9pIqLC/view?usp=sharing*@Вывод: Время затопления чаши прямо пропорционально зависит от диаметра дна (при одинаковом материале чаш).@@!3. Зависимость времени затопления чаши от температуры жидкости!@*https://drive.google.com/file/d/1IEwPNcPVEw5pDJb0Yk7kSUBsduJ3RtB4/view?usp=sharing*@Вывод: Время затопления чаши обратно пропорционально температуре (при одинаковом материале чаш).@@!4. Зависимость времени затопления от характеристики жидкости!@*https://drive.google.com/file/d/1ZdD1vJZdC0D_h95qAUTZAYquPG0gYMEJ/view?usp=sharing*@Вывод: Время затопления чаши зависит от рода жидкости и от наличия растворённых в жидкости других веществ.@@!5. Зависимость времени затопления от материала чаши!@*https://drive.google.com/file/d/1JSQCf94Z0bpiJzV6tH6B01pe7g3M9ktT/view?usp=sharing*@Вывод: Материал чаши незначительно влияет на время затопления (при одинаковых массах).@@!6. Зависимость времени затопления от эффекта смачивания!@* https://drive.google.com/file/d/1Gc6gW20yc-6s-V-JyRH3g-Ccn9SghGmC/view?usp=sharing*@Вывод: Покрытие чаши кремом и сливочным маслом незначительно повлияло на время затопления чаши.@@!Основные выводы!@Время затопления чаши зависит от:@1. Диаметра отверстия.@2. Диаметра дна, т.е. массы чаши.@3. Температуры жидкости.@4. Поверхностного натяжения.@5. Рода жидкости и наличия растворённых в жидкости других веществ.@@При изучении зависимости времени погружения от некоторых физических величин было выявлено, что при изменении одной величины (например, поверхностного натяжения с изменением температуры воды) изменяется и плотность воды, но изменение поверхностного натяжения будет большим, чем изменение плотности воды при одинаковом интервале температур, поэтому время нелинейно зависит от этих характеристик.@@!Заключение!@Исследование продемонстрировало, как различные физические параметры влияют на время затопления саксонской чаши. Полученные результаты помогут глубже понять принципы физики, такие как закон Архимеда, принцип Бернулли, поверхностное натяжение, смачивание и несмачивание."
   },
   {
      title: "Башня из теннисных мячей",
      section: "Statics",
      subject: "Physics",
      language: "rus",
      link: "-",
      description: "!Башня из теннисных мячей!@В данном эксперименте мы построим башню из теннисных мячей, укладывая их по три мяча на слой и один на самый верх. Мы исследуем конструктивные ограничения и устойчивость такой конструкции, а также рассмотрим, что изменится, если укладывать более трёх мячей в каждом слое и соответствующее количество мячей в верхнем слое.@@!Теоретическая часть!@Устойчивость конструкции башни из теннисных мячей зависит от множества параметров. Основные силы, которые влияют на устойчивость, включают силу трения покоя, силу трения качения и силу давления.@@!1. Сила трения покоя!@- Это сила, действующая между поверхностями покоящихся тел, препятствующая возникновению движения.@- Причина её возникновения — неровности соприкасающихся поверхностей, которые деформируются и препятствуют движению тела.@- При увеличении силы, приложенной к телу, сила трения покоя возрастает, так как увеличивается деформация неровностей.@@!2. Сила трения качения!@- Это сила сопротивления движению при перекатывании одного тела по поверхности другого без проскальзывания.@Причины трения качения:@1. Круглый предмет при качении слегка вдавливается в поверхность, образуя как бы ямку и бугорок. Катящееся тело создает себе препятствие (бугорок) собственным весом и преодолевает его, как бы вкатываясь в гору. При этом само тело тоже немного деформируется.@2. Сила сцепления (адгезия), возникающая между поверхностями в момент контакта, из-за межмолекулярного взаимодействия.@- Сила трения качения зависит от силы давления на поверхность, коэффициента трения качения и радиуса шара.@@!3. Сила давления!@- Сила, действующая на тело перпендикулярно его поверхности.@- В задачах часто сила давления равна весу тела.@- При равной силе можно получить разное давление, так как оно зависит от площади поверхности: чем меньше площадь, тем больше давление.@@ !Вывод формулы для устойчивости конструкции!@*https://drive.google.com/file/d/1aS03pyMyM17WOm9MIRLK3sdsekiO_F4E/view?usp=sharing*@@ На каждый мяч действуют следующие силы:@1. N1, N2 — силы нормальной реакции опоры@2. Fтр1, Fтр2 — силы трения@3. mg  — сила тяжести@Важно отметить, что R - радиус мяча, r - радиус окружности в основании.@@ Для вычисления устойчивости конструкции, рассмотрим равновесие верхнего мяча. Сумма моментов сил относительно точки касания мячей в основании должна быть равна нулю.@ Запишем условия равновесия для верхнего мяча:@mg×R=N2×R×sin(a)@@N2=mg/sin(a)@ Также нужно учесть силу трения: @Fтр=µ×N2, где µ — коэффициент трения покоя. @ Для устойчивости конструкции необходимо, чтобы сила трения была больше или равна горизонтальной составляющей силы нормальной реакции: @ µ×N2≥mg@ µ×mg/sin(a) ≥mg@ Из этого следует:@ µ≥sin(a)@@ !Конструктивные изменения:!@- Увеличение числа мячей в каждом слое приводит к увеличению нагрузки на нижние мячи. Следовательно, необходимо обеспечить более высокий коэффициент трения и прочность поверхности, на которой строится башня.@- Расположение мячей также влияет на устойчивость: правильная геометрическая форма укладки помогает равномерно распределить нагрузки и улучшить устойчивость."
   },
   {
     title: "Колыбель Ньютона",
     section: "Mechanics",
     subject: "Physics",
     language: "rus",
     link: "https://www.youtube.com/embed/X_RkXo-2J9U",
     description: "!Колыбель Ньютона! — устройство, демонстрирующее законы сохранения энергии и импульса через систему шариков, подвешенных на нитях. При отклонении и отпускании одного или нескольких шариков начинается их колебание, постепенно затухающее. Цель исследования — изучить, как существенные параметры (число, материал и расположение шариков) влияют на скорость затухания колебаний. @@ Важнейшими теоретическими аспектами являются: @- Закон сохранения энергии: в замкнутой системе полная энергия остается постоянной, переходя из одной формы в другую (например, из потенциальной в кинетическую и обратно).@ - Закон сохранения импульса: суммарный импульс сохраняется при любых взаимодействиях. @- Удар - кратковременное взаимодействие тел, возникающее при их соприкосновении. @- Волна в твердом теле - передача энергии деформации без переноса вещества.  @@Колыбель Ньютона демонстрирует эти законы через колебания шариков: при отклонении и отпускании одного или нескольких шариков их энергия и импульс передаются через систему, вызывая колебания других шариков. @@!Зависимость скорости затухания от угла наклона:!@В рамках исследования скорости затухания были проведены эксперименты, касающиеся влияния угла отклонения шариков. При условии, что масса шариков составляет 11 г, диаметр — 14 мм, а материал — сталь, наблюдения показали, что:@ - Чем больше угол отклонения одного шарика, тем больше время затухания системы. @- Время затухания при столкновении двух шариков одинаковой массы больше, чем при столкновении одного шарика с 2, 3 или 4 шариками *https://drive.google.com/file/d/1abfUkFDrQdNWzsqJ8-BSaTos4GEbRI2X/view?usp=sharing* @@!Зависимость скорости затухания от материала шаров:!@Также было изучено влияние материала шариков. В экспериментах использовались: @- Стальные шарики (11 г, 14 мм) @@- Деревянные шарики (2 г, 20 мм) @Результаты показали, что: @- С увеличением угла отклонения скорость затухания увеличивается.@ - Для системы из дерева скорость затухания меньше, чем для системы из стали. @ *https://drive.google.com/file/d/1jOrzYt2oH7DyhtUMt4BRVGVXXM0cOa0V/view?usp=sharing* @@ !Зависимость скорости затухания от количества покоящихся шаров:!@Влияние количества покоящихся шариков также было проанализировано. При массе 33 г и угле отклонения 45° для стальных шариков выяснили, что чем больше количество покоящихся шариков, тем меньше время затухания. *https://drive.google.com/file/d/1xrHlwqbhStCRpLfYgfNWp-TTYpGgfcXc/view?usp=sharing* @@! Зависимость скорости затухания от количества отклонённых шаров:!@Что касается количества отклоненных шариков, то при тех же условиях (масса 33 г, угол отклонения 45°, материал — сталь) скорость затухания увеличивается с увеличением массы шариков. *https://drive.google.com/file/d/1WN_Nhq3ONXc_kFQSSg9tAlA2ki1sSiz-/view?usp=sharing*@@ !Зависимость скорости затухания от массы шаров:!@В рамках эксперимента было проведено исследование, направленное на изучение влияния массы шариков на скорость затухания системы. Были использованы шарики из стали с различными массами и диаметрами: масса шариков — 7 г, 11 г, 33 г, диаметр шариков — 6 мм, 8 мм, 10 мм, материал — сталь. Эксперименты показали, что скорость затухания системы зависит от массы шариков: с увеличением массы шариков наблюдается увеличение скорости затухания. *https://drive.google.com/file/d/1iTiLTFjODg_bDnkpLsXCY-8DjmhQ4Hx4/view?usp=sharing*@@ !Зависимость скорости затухания от окружающей среды:!@Исследование также охватывало влияние сил сопротивления среды: при массе 33 г и угле отклонения 45° в среде воды скорость затухания оказалась больше, чем в воздухе. @@ !Зависимость скорости затухания от угла между нитями:!@Кроме того, было изучено влияние угла между нитями. При массе 33 г и угле отклонения 45° наблюдалось, что: @- Чем меньше угол между нитями (от 0 до 30°), тем меньше время затухания колебаний. @- Увеличение угла между нитями сделало систему более устойчивой, увеличивая время затухания колебаний. @@Таким образом, !скорость затухания колебаний! в колыбели Ньютона !зависит от таких факторов!, как:@- Масса и размер шариков. @- Материал шариков. @- Угол отклонения. @- Угол между нитями, на которых подвешены шарики. @- Количество отклоненных и покоящихся шариков. @- Свойства среды (например, воздух или вода). @@Эти наблюдения подтверждают, что различные физические параметры и условия окружающей среды влияют на поведение механических систем, что соответствует законам сохранения энергии и импульса."
   },
   {
     title: "Арифметические действия над натуральными числами",
     section: "Arithmetic",
     subject: "Math",
     language: "rus",
     link: "https://www.youtube.com/embed/qGNU3zuL6e8",
     description: "!Арифметические действия над натуральными числами!@@1. Определение натуральных чисел@- Натуральные числа — числа, используемые для счета: 1, 2, 3, 4, и т.д.@@2. Сложение@- Объединение двух чисел (слагаемых) для получения суммы.@- Свойства: коммутативность (a + b = b + a), ассоциативность ((a + b) + c = a + (b + c)), нейтральный элемент (a + 0 = a).@@3. Вычитание@- Из одного числа (уменьшителя) вычитается другое число (вычитаемое) для получения разности.@- Свойства: не коммутативно (a - b ≠ b - a), не ассоциативно ((a - b) - c ≠ a - (b - c)).@@4. Умножение@- Повторное добавление одного числа (множителя) к себе по количеству другого числа (множителя) для получения произведения.@- Свойства: коммутативность (a × b = b × a), ассоциативность ((a × b) × c = a × (b × c)), дистрибутивность относительно сложения (a × (b + c) = a × b + a × c), нейтральный элемент (a × 1 = a).@@5. Деление@- Разделение одного числа (делимого) на другое (делитель) для получения частного.@- Свойства: не коммутативно (a ÷ b ≠ b ÷ a), не ассоциативно ((a ÷ b) ÷ c ≠ a ÷ (b ÷ c)), деление на ноль невозможно.@@6. Практическое применение@- Решение задач и примеров на сложение, вычитание, умножение и деление."
   }
    // {
    //   title: "Faraday's law",
    //   section: "Electromagnetic induction",
    //   subject: "Physics",
    //   language: "rus",
    //   link: "-",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
=======
      link: "https://www.youtube.com/embed/X_RkXo-2J9U",
      description: "!Колыбель Ньютона! — устройство, демонстрирующее законы сохранения энергии и импульса через систему шариков, подвешенных на нитях. При отклонении и отпускании одного или нескольких шариков начинается их колебание, постепенно затухающее. Цель исследования — изучить, как существенные параметры (число, материал и расположение шариков) влияют на скорость затухания колебаний. @@ Важнейшими теоретическими аспектами являются: @- Закон сохранения энергии: в замкнутой системе полная энергия остается постоянной, переходя из одной формы в другую (например, из потенциальной в кинетическую и обратно).@ - Закон сохранения импульса: суммарный импульс сохраняется при любых взаимодействиях. @- Удар - кратковременное взаимодействие тел, возникающее при их соприкосновении. @- Волна в твердом теле - передача энергии деформации без переноса вещества.  @@Колыбель Ньютона демонстрирует эти законы через колебания шариков: при отклонении и отпускании одного или нескольких шариков их энергия и импульс передаются через систему, вызывая колебания других шариков. @@!Зависимость скорости затухания от угла наклона:!@В рамках исследования скорости затухания были проведены эксперименты, касающиеся влияния угла отклонения шариков. При условии, что масса шариков составляет 11 г, диаметр — 14 мм, а материал — сталь, наблюдения показали, что:@ - Чем больше угол отклонения одного шарика, тем больше время затухания системы. @- Время затухания при столкновении двух шариков одинаковой массы больше, чем при столкновении одного шарика с 2, 3 или 4 шариками *https://drive.google.com/file/d/1abfUkFDrQdNWzsqJ8-BSaTos4GEbRI2X/view?usp=sharing* @@!Зависимость скорости затухания от материала шаров:!@Также было изучено влияние материала шариков. В экспериментах использовались: @- Стальные шарики (11 г, 14 мм) @@- Деревянные шарики (2 г, 20 мм) @Результаты показали, что: @- С увеличением угла отклонения скорость затухания увеличивается.@ - Для системы из дерева скорость затухания меньше, чем для системы из стали. @ *https://drive.google.com/file/d/1jOrzYt2oH7DyhtUMt4BRVGVXXM0cOa0V/view?usp=sharing* @@ !Зависимость скорости затухания от количества покоящихся шаров:!@Влияние количества покоящихся шариков также было проанализировано. При массе 33 г и угле отклонения 45° для стальных шариков выяснили, что чем больше количество покоящихся шариков, тем меньше время затухания. *https://drive.google.com/file/d/1xrHlwqbhStCRpLfYgfNWp-TTYpGgfcXc/view?usp=sharing* @@! Зависимость скорости затухания от количества отклонённых шаров:!@Что касается количества отклоненных шариков, то при тех же условиях (масса 33 г, угол отклонения 45°, материал — сталь) скорость затухания увеличивается с увеличением массы шариков. *https://drive.google.com/file/d/1WN_Nhq3ONXc_kFQSSg9tAlA2ki1sSiz-/view?usp=sharing*@@ !Зависимость скорости затухания от массы шаров:!@В рамках эксперимента было проведено исследование, направленное на изучение влияния массы шариков на скорость затухания системы. Были использованы шарики из стали с различными массами и диаметрами: масса шариков — 7 г, 11 г, 33 г, диаметр шариков — 6 мм, 8 мм, 10 мм, материал — сталь. Эксперименты показали, что скорость затухания системы зависит от массы шариков: с увеличением массы шариков наблюдается увеличение скорости затухания. *https://drive.google.com/file/d/1iTiLTFjODg_bDnkpLsXCY-8DjmhQ4Hx4/view?usp=sharing*@@ !Зависимость скорости затухания от окружающей среды:!@Исследование также охватывало влияние сил сопротивления среды: при массе 33 г и угле отклонения 45° в среде воды скорость затухания оказалась больше, чем в воздухе. @@ !Зависимость скорости затухания от угла между нитями:!@Кроме того, было изучено влияние угла между нитями. При массе 33 г и угле отклонения 45° наблюдалось, что: @- Чем меньше угол между нитями (от 0 до 30°), тем меньше время затухания колебаний. @- Увеличение угла между нитями сделало систему более устойчивой, увеличивая время затухания колебаний. @@Таким образом, !скорость затухания колебаний! в колыбели Ньютона !зависит от таких факторов!, как:@- Масса и размер шариков. @- Материал шариков. @- Угол отклонения. @- Угол между нитями, на которых подвешены шарики. @- Количество отклоненных и покоящихся шариков. @- Свойства среды (например, воздух или вода). @@Эти наблюдения подтверждают, что различные физические параметры и условия окружающей среды влияют на поведение механических систем, что соответствует законам сохранения энергии и импульса."
    },
    {
      title: "Арифметические действия над натуральными числами",
      section: "Arithmetic",
      subject: "Math",
      language: "rus",
      link: "https://www.youtube.com/embed/qGNU3zuL6e8",
      description: "!Арифметические действия над натуральными числами!@@1. Определение натуральных чисел@- Натуральные числа — числа, используемые для счета: 1, 2, 3, 4, и т.д.@@2. Сложение@- Объединение двух чисел (слагаемых) для получения суммы.@- Свойства: коммутативность (a + b = b + a), ассоциативность ((a + b) + c = a + (b + c)), нейтральный элемент (a + 0 = a).@@3. Вычитание@- Из одного числа (уменьшителя) вычитается другое число (вычитаемое) для получения разности.@- Свойства: не коммутативно (a - b ≠ b - a), не ассоциативно ((a - b) - c ≠ a - (b - c)).@@4. Умножение@- Повторное добавление одного числа (множителя) к себе по количеству другого числа (множителя) для получения произведения.@- Свойства: коммутативность (a × b = b × a), ассоциативность ((a × b) × c = a × (b × c)), дистрибутивность относительно сложения (a × (b + c) = a × b + a × c), нейтральный элемент (a × 1 = a).@@5. Деление@- Разделение одного числа (делимого) на другое (делитель) для получения частного.@- Свойства: не коммутативно (a ÷ b ≠ b ÷ a), не ассоциативно ((a ÷ b) ÷ c ≠ a ÷ (b ÷ c)), деление на ноль невозможно.@@6. Практическое применение@- Решение задач и примеров на сложение, вычитание, умножение и деление."
    }
>>>>>>> ca1efe51b08104323d0fba7aee20f7d4b12e0647
    // {
    //   title: "Magnetic field and its characteristics",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/-ngxcW7VMLY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Magnetic induction vector module. Ampere's law",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/mgipYDDZeLg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // }, 
    // {
    //   title: "Conditions for the existence of direct current. Electromotive force",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/68Nktnw2Egg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Ohm's law. Conductor Resistance Calculation",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/PBI9RxyDpi8",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "The subject of thermodynamics. Internal body energy",
    //   section: "Basics of thermodynamics",
    //   link: "https://www.youtube.com/embed/9mmb6gjVwE",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Laws of geometric optics",
    //   section: "Geometric optics",
    //   link: "https://www.youtube.com/embed/LVziS9Fkrb4",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Oscillatory motion and its characteristics",
    //   section: "Mechanical vibrations",
    //   link: "https://www.youtube.com/embed/Kc2-znE9-wY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
  ];

  constructor() { }

  getLessons(): Lesson[] {
    console.log(this.lessons);
    return this.lessons;
  }

  addLesson(lesson: Lesson) {
    this.lessons = [...this.lessons, lesson];
    console.log('Lesson added!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  editLesson(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
    console.log('Lesson edited!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  deleteLesson(index: number) {
    this.lessons.splice(index, 1);
    console.log('Lesson deleted!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  getLessonByTitle(title: string): Lesson | undefined {
    return this.lessons.find(lessons => lessons.title === title);
  }

  searchLessons(query: string): Lesson[] {
    return this.lessons.filter(lesson => lesson.title.toLowerCase().includes(query.toLowerCase()));
  }

  dataChanged = new EventEmitter<Lesson[]>();
}
