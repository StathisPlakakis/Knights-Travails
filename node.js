class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.adjacentNodes = [];
    // if (this.y - 2 >= 0 && this.x - 1 >= 0) {
    //   this.adjacentNodes.push(new Node(this.x - 1, this.y - 2));
    // }
    // if (this.y - 2 >= 0 && this.x + 1 <= 7) {
    //   this.adjacentNodes.push(new Node(this.x + 1, this.y - 2));
    // }
    // if (this.y - 1 >= 0 && this.x - 2 >= 0) {
    //   this.adjacentNodes.push(new Node(this.x - 2, this.y - 1));
    // }
    // if (this.y - 1 >= 0 && this.x + 2 <= 7) {
    //   this.adjacentNodes.push(new Node(this.x + 2, this.y - 1));
    // }
    // if (this.y + 2 <= 7 && this.x - 1 >= 0) {
    //   this.adjacentNodes.push(new Node(this.x - 1, this.y + 2));
    // }
    // if (this.y + 2 <= 7 && this.x + 1 <= 7) {
    //   this.adjacentNodes.push(new Node(this.x + 1, this.y + 2));
    // }
    // if (this.y + 1 <= 7 && this.x - 2 >= 0) {
    //   this.adjacentNodes.push(new Node(this.x - 2, this.y + 1));
    // }
    // if (this.y + 1 <= 7 && this.x + 2 <= 7) {
    //   this.adjacentNodes.push(new Node(this.x + 2, this.y + 1));
    // }
  }
}

export default Node;