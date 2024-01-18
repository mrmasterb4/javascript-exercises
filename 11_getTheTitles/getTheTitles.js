const getTheTitles = function(books) {
    return books.map((item) => item.title); // each item is {title: x, author: x} so if we say return item where => item.title it will return value of item,/
};

// Do not edit below this line
module.exports = getTheTitles;
