/*- є масив*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/* -- відсортувати його за спаданням за monthDuration*/
const sortedByDurationDescending = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedByDurationDescending);
/* -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
const longerThanFiveMonths = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(longerThanFiveMonths);
/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
const transformedCourses = coursesAndDurationArray.map(course => ({
    id: coursesAndDurationArray.indexOf(course),
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedCourses);
