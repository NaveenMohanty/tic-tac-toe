export const localStorageSet = (
  isCircle = false,
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  score = {
    circle: 0,
    cross: 0,
  }
) => {
  if (!localStorage.getItem("isCircle")) {
    localStorage.setItem("isCircle", false);
  } else {
    localStorage.setItem("isCircle", isCircle);
  }
  if (!localStorage.getItem("board")) {
    localStorage.setItem("board", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
  } else {
    localStorage.setItem("board", board);
  }
  if (!localStorage.getItem("score")) {
    localStorage.setItem("score", {
      circle: 0,
      cross: 0,
    });
  } else {
    localStorage.setItem("score", score);
  }
};

export const localStorageGet = () => {
  let setData = {
    isCircle: false,
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    score: {
      circle: 0,
      cross: 0,
    },
  };
  if (localStorage.getItem("isCircle")) {
    setData.isCircle = localStorage.getItem("isCircle");
  }
  if (localStorage.getItem("board")) {
    setData.board = localStorage.getItem("board");
  }
  if (localStorage.getItem("score")) {
    setData.score = localStorage.getItem("score");
  }
  return setData;
};
