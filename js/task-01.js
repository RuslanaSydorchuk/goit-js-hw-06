const category = document.querySelector('#categories');
const categoryItems = category.children;
const categoriesNumber = categoryItems.length;
console.log('Number of categories:', categoriesNumber);



for (const categoryItem of categoryItems) {
    const categoryName = categoryItem.querySelector('h2');
    console.log('Category:', categoryName.textContent);
    const list = categoryItem.querySelectorAll('li');
    console.log('Elements:',list.length);

}
