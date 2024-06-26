/* eslint-disable no-undef */
import GameBoard from "../classes/gameboard";

const testingGameBoard = new GameBoard();
testingGameBoard.ships = testingGameBoard.initializeShips();
// ship placing tests

test("Gameboard is placing horizontal ship(length 2) in top-left corner", () => {
  const returnMessage = testingGameBoard.placeShip(0, 0, 0, true);
  expect(returnMessage).toBe(
    "Your ship of length 2 is positioned at [0, 0] to [0, 1]",
  );
});

test("GameBoard is not placing the ship(length 2) outside of the board", () => {
  const returnMessage = testingGameBoard.placeShip(1, -1, -1, true);
  expect(returnMessage).toBeFalsy();
});

test("GameBoard is placing vertical ship(length 2) in top-right corner", () => {
  const returnMessage = testingGameBoard.placeShip(2, 0, 9, false);
  expect(returnMessage).toBe(
    "Your ship of length 2 is positioned at [0, 9] to [1, 9]",
  );
});

test("Colliding ship is not placed", () => {
  const returnMessage = testingGameBoard.placeShip(3, 0, 9, false);
  expect(returnMessage).toBeFalsy();
});

test("Gameboard is placing horizontal ship(length 3) in bottom-left corner", () => {
  const returnMessage = testingGameBoard.placeShip(4, 9, 0, true);
  expect(returnMessage).toBe(
    "Your ship of length 3 is positioned at [9, 0] to [9, 2]",
  );
});

test("Gameboard is placing vertical ship(length 3) in bottom-right corner", () => {
  const returnMessage = testingGameBoard.placeShip(5, 7, 9, false);
  expect(returnMessage).toBe(
    "Your ship of length 3 is positioned at [7, 9] to [9, 9]",
  );
});

test("Gameboard is not placing the same ship", () => {
  const returnMessage = testingGameBoard.placeShip(5, 9, 7, false);
  expect(returnMessage).toBeFalsy();
});

test("Gameboard is not placing vertical ship(length 3) if exceeds board", () => {
  const returnMessage = testingGameBoard.placeShip(6, 9, 4, false);
  expect(returnMessage).toBeFalsy();
});

test("Gameboard is placing horizontal ship(length 4) in the middle", () => {
  const returnMessage = testingGameBoard.placeShip(7, 4, 3, true);
  expect(returnMessage).toBe(
    "Your ship of length 4 is positioned at [4, 3] to [4, 6]",
  );
});

test("Gameboard is placing vertical ship(length 4) in the middle", () => {
  const returnMessage = testingGameBoard.placeShip(8, 3, 0, false);
  expect(returnMessage).toBe(
    "Your ship of length 4 is positioned at [3, 0] to [6, 0]",
  );
});

test("Gameboard is deleting a ship", () => {
  testingGameBoard.removeShip(8);
  const result = testingGameBoard.isShipAlreadyPlaced(8);
  expect(result).toBeFalsy();
});

test("Ships are getting hit", () => {
  const returnMessage = testingGameBoard.receiveAttack(4, 3);
  expect(returnMessage).toBe("Hit!");
});

test("Player can miss", () => {
  const returnMessage = testingGameBoard.receiveAttack(0, 3);
  expect(returnMessage).toBe("You missed!");
});
// ship auto placement test

const testingGameBoard2 = new GameBoard();
test("All ships are placed randomly", () => {
  testingGameBoard2.placeShipsRandomly();
  const allShipsPlaced = testingGameBoard2.ships.every((ship) =>
    testingGameBoard2.isShipAlreadyPlaced(ship.getId()),
  );
  expect(allShipsPlaced).toBe(true);
});
