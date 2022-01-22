const obj = JSON.parse(localStorage[`value`]);

const arrayOfValues = Object.values(obj);

const generateList = function generateList(arr) {
    let ul = document.createElement('ul');

    arr.forEach(function(el) {
        let li = document.createElement('li');
        let childElement;

        if (Array.isArray(el)) {
            childElement = generateList(el);
        } else {
            childElement = document.createTextNode(el)
        }

        li.appendChild(childElement);
        ul.appendChild(li);
    })

    return ul;
}

document.body.appendChild(generateList(arrayOfValues));

