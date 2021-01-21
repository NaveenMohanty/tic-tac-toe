export const localStorageSet = (data) => {
  localStorage.setItem("tictactoe", JSON.stringify(data));
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
  if (localStorage.getItem("tictactoe")) {
    setData = JSON.parse(localStorage.getItem("tictactoe"));
  }
  return setData;
};
