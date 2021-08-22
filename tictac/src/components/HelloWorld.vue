<template>
  <div id="app">
    <div class="status">{{ status }}</div>
    <button @click="reset">Reset</button>
    <h5>{{ endMessage }}</h5>
    <template v-for="row in 3">
      <div class="row" :key="row">
        <button
          v-for="button in 3"
          :key="button"
          class="square"
          style="width:40px;height:40px;"
          @click="clicked((row - 1) * 3 + button - 1)"
        >
          {{ boardStatus[(row - 1) * 3 + button - 1] }}
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      endMessage: "",
      status: "Next player: X",
      boardStatus: ["", "", "", "", "", "", "", "", ""],
    };
  },
  methods: {
    clicked(button) {
      if (!this.boardStatus[button]) {
        let player = this.status[13];
        this.boardStatus[button] = player;
        this.status = player === "X" ? "Next player: O" : "Next player: X";
      }
      this.endMessage = this.checkWinDraw();
    },
    reset() {
      this.boardStatus = ["", "", "", "", "", "", "", "", ""];
      this.status = "Next player: X";
    },
    checkWinDraw() {
      for (let i = 0; i < 3; i++) {
        // check columns
        if (
          this.boardStatus[i] !== "" &&
          this.boardStatus[i] === this.boardStatus[i + 3] &&
          this.boardStatus[i + 3] === this.boardStatus[i + 6]
        ) {
          return `the winner is: ${this.boardStatus[i]}`;
        }
      }
      for (let i = 0; i < 3; i += 3) {
        // check rows
        if (
          this.boardStatus[i] !== "" &&
          this.boardStatus[i] === this.boardStatus[i + 1] &&
          this.boardStatus[i + 1] === this.boardStatus[i + 2]
        ) {
          return `the winner is: ${this.boardStatus[i]}`;
        }
      }
      if (
        //check diagonal1
        this.boardStatus[0] !== "" &&
        this.boardStatus[0] === this.boardStatus[4] &&
        this.boardStatus[4] === this.boardStatus[8]
      ) {
        return `the winner is: ${this.boardStatus[4]}`;
      }
      if (
        //check diagonal2
        this.boardStatus[2] !== "" &&
        this.boardStatus[2] === this.boardStatus[4] &&
        this.boardStatus[4] === this.boardStatus[6]
      ) {
        return `the winner is: ${this.boardStatus[4]}`;
      }
      let isDraw = true;
      for (let i = 0; i < 9; i++) {
        isDraw = this.boardStatus[i] === "" ? false : isDraw;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>