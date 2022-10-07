const itemRef = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemRef.length}`)


const arrRef = itemRef.forEach((element) => {

    const h2Ref = element.querySelector('h2')
    const liRef = element.querySelectorAll('li')

        console.log(`Category: ${h2Ref.textContent}`);
        console.log(`Elements: ${liRef.length}`);
});
