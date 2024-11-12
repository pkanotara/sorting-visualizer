import { selectionSort } from "./selectionSort";
import {
  changeBackgroundColor,
  swapBars,
  disableButton,
} from "../../Helper/Helper";

export function visualizeSelectionSort(
  array,
  animationTime,
  arrFromNodeList,
  pseudoSections
) {
  let sortedArr = selectionSort(array);
  let currElmColor = "#264653";
  let compareElmColor = "#e9c46a";
  let minElmColor = "#9e2a2b";
  let sortedColor = "#2a9d8f";
  let unsortedColor = "#da7f4b";
  pseudoSections[0].classList.add("active");
  
  for (let i = 0; i < sortedArr.length; i++) {
    disableButton(true);
    setTimeout(() => {
      if (i === sortedArr.length - 1) {
        disableButton(false);
      }
      visualizePseudo(sortedArr[i], pseudoSections);
      checkPseudoAnim(sortedArr[i], arrFromNodeList, arrFromNodeList);
      
      // Change the background color of the elements being processed
      changeBackgroundColor(
        sortedArr[i].minIndex,
        minElmColor,
        arrFromNodeList
      );
      changeBackgroundColor(
        sortedArr[i].currElm,
        currElmColor,
        arrFromNodeList
      );
      changeBackgroundColor(
        sortedArr[i].compareElm,
        compareElmColor,
        arrFromNodeList
      );

      // If there's a swap, change the colors and perform the swap
      if (sortedArr[i].isSwap === true) {
        changeBackgroundColor(
          sortedArr[i].minIndex,
          sortedColor,
          arrFromNodeList
        );
        changeBackgroundColor(
          sortedArr[i].currElm,
          sortedColor,
          arrFromNodeList
        );
        swapBars(
          sortedArr[i].currElm,
          sortedArr[i].compareElm,
          arrFromNodeList
        );
      }
    }, i * animationTime);

    setTimeout(() => {
      visualizePseudo(sortedArr[i], pseudoSections);
      
      // Final element that has reached its sorted position
      if (sortedArr[i].isFinalElm === true) {
        changeBackgroundColor(
          sortedArr[i].finalElm,
          sortedColor,
          arrFromNodeList
        );
      } else {
        // Elements that are not yet sorted
        changeBackgroundColor(
          sortedArr[i].compareElm,
          unsortedColor,
          arrFromNodeList
        );
        changeBackgroundColor(
          sortedArr[i].minIndex,
          unsortedColor,
          arrFromNodeList
        );
      }
      
      if (i === sortedArr.length - 1) {
        removePreviousActivePseudo();
        const pseudoCheckingElm = document.querySelector(
          ".pseudo-code-container .checking"
        );
        pseudoCheckingElm.textContent = "Let's Go";
      }
    }, (i + 1) * animationTime);
  }
}

function removePreviousActivePseudo() {
  let sections = document.querySelectorAll(".active");
  sections.forEach((section) => {
    section.classList.remove("active");
  });
}

function visualizePseudo(data, pseudoSections) {
  removePreviousActivePseudo();
  pseudoSections[1].classList.add("active");
  
  if (data.isOutJLoop) {
    removePreviousActivePseudo();
    pseudoSections[1].classList.add("active");
  } else {
    removePreviousActivePseudo();
    pseudoSections[3].classList.add("active");
  }
  if (data.isChangeMin) {
    removePreviousActivePseudo();
    pseudoSections[4].classList.add("active");
  }
  if (data.isCompareIandMin) {
    removePreviousActivePseudo();
    pseudoSections[5].classList.add("active");
  }
  if (data.isSwap) {
    removePreviousActivePseudo();
    pseudoSections[6].classList.add("active");
  }
  if (data.isFinalElm) {
    removePreviousActivePseudo();
    pseudoSections[1].classList.add("active");
  }
}

function checkPseudoAnim(data, arrFromNodeList) {
  const pseudoCheckingElm = document.querySelector(
    ".pseudo-code-container .checking"
  );
  
  if (data.isFinalElm) {
    return;
  }
  if (!data.isOutJLoop) {
    pseudoCheckingElm.textContent = `Check if the value ${
      arrFromNodeList[data.compareElm].textContent
    } is smaller than the minimum (${arrFromNodeList[data.minIndex].textContent})`;
  }
  if (data.isChangeMin || data.isOutJLoop) {
    pseudoCheckingElm.textContent = `Set value ${
      arrFromNodeList[data.minIndex].textContent
    } as the minimum value`;
  }

  if (data.isSwap) {
    pseudoCheckingElm.textContent = `Swap values ${
      arrFromNodeList[data.compareElm].textContent
    } and ${arrFromNodeList[data.minIndex].textContent}`;
  }
  if (data.isCompareIandMin) {
    pseudoCheckingElm.textContent = `Check if values ${
      arrFromNodeList[data.compareElm].textContent
    } and ${arrFromNodeList[data.minIndex].textContent} are different`;
  }
}
