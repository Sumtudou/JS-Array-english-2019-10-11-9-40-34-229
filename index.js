    // The writer determines whether the following variables are of type array.
    var a = '[a, b, c, d]';
    var b = [1, 2, 3, 4];
    //TODO
    document.write(typeof a);
    document.write(typeof b);
    document.write("<br/>"); //换个行


    // Write a program that multiplies each entry in the following array by 2。
    var a = [1, 2, 3, 4, 5];
    // TODO should output [2,4,6,8,10]
    document.write("[");
    for (let i = 0; i < a.length; i++) {
        if (i != 0) {
            document.write(",");
        }
        document.write(a[i] * 2);
    }
    document.write("]");
    document.write("<br/>"); //换个行

    // Write the program, according to the following requirements output results.
    var colors = ["Red", "Green", "White", "Black"];
    //TODO case 1 output: 'Red Green White Black'
    // case 2 output: 'Red+Green+White+Black'
    // case 3 output: 'Red,Green,White,Black'
    function printCol(i) {
        var splits = " ";
        if (i == 2) {
            splits = "+";
        }
        if (i == 3) {
            splits = ",";
        }
        document.write("case " + i.toString() + "：<br/>");
        for (let i = 0; i < colors.length; i++) {
            if (i != 0) {
                document.write(splits);
            }
            document.write(colors[i]);
        }
        document.write("<br/>");

    }
    printCol(1);
    printCol(2);
    printCol(3);

    // Write a program to sort the Numbers in the following array from largest to smallest.
    var a = [5, 1, 8, 10, 4];
    //TODO should output: [10,8,5,4,1]
    var compare = function (x, y) {
        if (x < y) {
            return 1;
        } else if (x > y) {
            return -1;
        } else {
            return 0;
        }
    }
    a.sort(compare);
    document.write(a);
    document.write("<br/>");


    // Program to find the most frequent element in the following array.
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    var map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) { //有a[i]
            let num = map.get(a[i]);
            map.set(a[i], num+1);
        } else {
            map.set(a[i], 1);
        }
    }
    var chars = " ";
    var sum = "-1";
    map.forEach(function (value, key, maps) {
        if(value>sum){
            sum = value;
            chars = key;
        }
    });
    document.write(chars);

    //TODO should output: 'a'