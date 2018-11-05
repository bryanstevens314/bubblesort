function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let head = 0;
  let tail = wholeArray.length - 1;
  while (tail >= head) {
    if (head !== tail) {
      firstHalf.push(wholeArray[head]);
      secondHalf.push(wholeArray[tail]);
    } else {
      firstHalf.push(wholeArray[head]);
    }
    head++;
    tail--;
  }
  if (firstHalf.length > 1) {
    firstHalf = split(firstHalf);
  }
  if (secondHalf.length > 1) {
    secondHalf = split(secondHalf);
  }
  console.dir('here: ' + [firstHalf, secondHalf]);
  return [firstHalf, secondHalf].flat();
}

function merge(originalArray, theTemp = originalArray) {
  let tempArray = [];
  theTemp.forEach((element, index) => {
    if (Array.isArray(element)) {
      element.forEach((element1, index1) => {
        let temp = [];
        let nextItem = theTemp[index1 + 1];
        if (nextItem && element1 > nextItem) {
          temp.push(nextItem);
          temp.push(element1);
          tempArray.push(temp);
        } else if (!nextItem) {
          tempArray.push(element1);
        }
      });
    } else {
      let temp = [];
      let nextItem = theTemp[index + 1];
      if (nextItem && element > nextItem) {
        temp.push(nextItem);
        temp.push(element);
        tempArray.push(temp);
      } else if (!nextItem) {
        tempArray.push(element);
      }
    }
  });
  // console.log('temp: ', tempArray);
  // if (tempArray.length !== originalArray.length) {
  //   tempArray = merge(originalArray, tempArray);
  // }

  return tempArray;
}
