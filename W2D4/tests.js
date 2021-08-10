describe("filter", function () {
    it("Exercise1 filter function ,The  function  returns  the  string  after  removing  all  the banned  words. ",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});

describe("bubbleSort", function () {
    it("Exercise2 BubbleSort  algorithm  on  the  Array  object that  works  by  repeatedly  stepping  through  the  list  to  be  sorted,",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});

describe("teach", function () {
    it("Exercise3 Teacher method take subject strings and returns the teacher name along with he's subject name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("John", 29);
            assert.equal(teacher.teach("Inheritance"),  `${teacher.name} is now teaching Inheritance`);
        });
});