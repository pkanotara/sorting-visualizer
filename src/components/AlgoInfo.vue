<template>
  <div
    class="container algo-info"
    @mouseover="pauseInterval = true"
    @mouseleave="pauseInterval = false"
  >
    <div>
      <div class="text">
        <p>
          {{ selectedAlgo.infoList[currIndex] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAlgo: null,
      currIndex: 0,
      pauseInterval: false,
      algoInfo: [
        {
          name: "selection",
          infoList: [
            "Selection sort is one of the slowest sorting techniques",
            "Selection sort has a time complexity of O(n^2) in all cases",
            "The first step of selection sort is to find the minimum value from the unsorted part and swap it with the first element of the unsorted part",
          ],
        },
        {
          name: "insertion",
          infoList: [
            "Insertion sort works well for small datasets and when the data is mostly already sorted",
            "Insertion sort has a time complexity of O(n^2) in the worst case and O(n) in the best case",
            "The idea of insertion sort is like sorting playing cards, take one element and compare it with the previous one until the taken element is greater than the previous one. Do this for every element in the array",
          ],
        },
        {
          name: "bubble",
          infoList: [
            "Bubble sort has several different versions, but the idea is the same.",
            "The slowest version of bubble sort has a time complexity of O(n^2) in all cases. However, there is a better version that reduces the time complexity to O(n) in the best case",
            "Bubble sort sorts data by continuously comparing each element with the next one until an iteration where no changes occur",
          ],
        },
      ],
    };
  },
  mounted() {
    this.selectedAlgo = this.algoInfo[0];
    setTimeout(() => {
      setInterval(() => {
        if (!this.pauseInterval) {
          if (this.currIndex == this.selectedAlgo.infoList.length - 1) {
            this.currIndex = 0;
            return;
          }
          this.currIndex += 1;
        }
      }, 5000);
    }, 5000);

    this.eventHub.$on("changeAlgo", (data) => {
      let selectedAlgo = data.toLowerCase();
      if (selectedAlgo == "selection") {
        this.selectedAlgo = this.algoInfo[0];
      } else if (selectedAlgo == "insertion") {
        this.selectedAlgo = this.algoInfo[1];
      } else if (selectedAlgo == "bubble") {
        this.selectedAlgo = this.algoInfo[2];
      }
    });
  },
};
</script>

<style scoped>
.algo-info {
  position: relative;
  padding: 1rem 0;
}
.algo-info:hover {
  cursor: default;
  outline: 2px solid var(--soft-dark);
  border-radius: 5px;
}

.algo-info:hover::before {
  content: "\f08d";
}
.algo-info::before {
  content: "\f128";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 1.8rem !important;
}
</style>
