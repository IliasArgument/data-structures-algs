var maxSequence = function(array){
    if (!array.length){
      return 0
    }
    var ans = 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {

        ans = Math.max(0, ans + array[i]);
        sum = Math.max(sum, ans);
        console.log(ans, sum, array[i]);
    }
    
    return sum;
}

// поиск максмимального неприрывного значения в подмасиве