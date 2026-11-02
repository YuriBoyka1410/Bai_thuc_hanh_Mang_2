let b = document.getElementById("carogame");

let board = [];

for (let i = 0; i < 5; i++) {
  board[i] = new Array(0, 0, 0, 0, 0);
}

function displayBoard() {
  data = "";

  for (let i = 0; i < 5; i++) {
    data += "<br>";

    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }

  b.innerHTML = data;
}

// Hiển thị bàn cờ lần đầu
displayBoard();

function changeValue() {
  let positionX = prompt("Nhập vị trí X (0-4):");
  let positionY = prompt("Nhập vị trí Y (0-4):");

  // Kiểm tra người dùng bấm Cancel
  if (positionX === null || positionY === null) {
    return;
  }

  // Chuyển dữ liệu sang kiểu Number
  positionX = Number(positionX);
  positionY = Number(positionY);

  // Kiểm tra dữ liệu nhập vào
  if (
    !Number.isInteger(positionX) ||
    !Number.isInteger(positionY) ||
    positionX < 0 ||
    positionX > 4 ||
    positionY < 0 ||
    positionY > 4
  ) {
    alert("Vị trí không hợp lệ! Hãy nhập số từ 0 đến 4.");
    return;
  }

  // Kiểm tra ô đã được đánh chưa
  if (board[positionX][positionY] !== 0) {
    alert("Ô này đã được đánh!");
    return;
  }

  // Thay đổi giá trị
  board[positionX][positionY] = "x";

  // Cập nhật bàn cờ
  displayBoard();
}
