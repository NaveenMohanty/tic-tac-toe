import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ImCross } from "react-icons/im";
import { BiCircle } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
// import { localStorageGet, localStorageSet } from "./localStorage";

const App = () => {
  const [isCircle, setIsCircle] = useState(false);
  const [score, setScore] = useState({
    circle: 0,
    cross: 0,
  });
  const { circle, cross } = score;
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //!It is in a development phase trying to store data in local storage
  // useEffect(() => {
  //   if (!localStorage.getItem("isCircle")) {
  //     localStorageSet();
  //   } else {
  //     localStorageSet(isCircle, board, score);
  //     let setData = localStorageGet();
  //     if (setData.isCircle !== isCircle) {
  //       setIsCircle(setData.isCircle);
  //     }
  //     if (setData.score !== score) {
  //       setScore(setData.score);
  //     }
  //     if (setData.board !== board) {
  //       setBoard(setData.board);
  //     }
  //   }
  // }, [isCircle, board, score]);

  const afterWin = (i) => {
    if (board[i] === 1) {
      toast.success("O Win!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setScore({ ...score, circle: circle + 1 });
        setIsCircle(true);
      }, 1000);
    } else {
      toast.success("X Win!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setScore({ ...score, cross: cross + 1 });

        setIsCircle(false);
      }, 1000);
    }
  };
  const checkWin = () => {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== 0) {
      afterWin(0);
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[3] !== 0
    ) {
      afterWin(3);
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[6] !== 0
    ) {
      afterWin(6);
    } else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[0] !== 0
    ) {
      afterWin(7);
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[1] !== 0
    ) {
      afterWin(1);
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[2] !== 0
    ) {
      afterWin(2);
    } else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== 0
    ) {
      afterWin(0);
    } else if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[2] !== 0
    ) {
      afterWin(2);
    } else if (
      board[0] > 0 &&
      board[1] > 0 &&
      board[2] > 0 &&
      board[3] > 0 &&
      board[4] > 0 &&
      board[5] > 0 &&
      board[6] > 0 &&
      board[7] > 0 &&
      board[8] > 0
    ) {
      toast.success("No one Won!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }, 1000);
    }
  };
  const changeBoard = (index) => {
    if (board[index] === 0) {
      let temp = board;
      temp[index] = isCircle ? 1 : 2;
      setBoard(temp);
      setIsCircle(!isCircle);
    } else {
      if (board[index] === 1) {
        toast.error("O is already there", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } else if (board[index] === 2) {
        toast.error("X is already there", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    }
    checkWin();
  };

  const onClickReset = (item) => {
    if (item === "board") {
      setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    } else {
      setScore({
        circle: 0,
        cross: 0,
      });
    }
  };
  const getIcon = (i) => {
    if (board[i] === 0) {
      return <FiEdit2 size="50" color="red" style={{ padding: "20px" }} />;
    } else if (board[i] === 1) {
      return <BiCircle color="yellow" size="50" style={{ padding: "20px" }} />;
    } else {
      return <ImCross color="green" size="50" style={{ padding: "20px" }} />;
    }
  };

  return (
    <div className="container">
      <h1 className="headTitle">Tic Tac Toe</h1>
      <div className="header">
        <div className="symbol">
          <h1>
            {isCircle ? (
              <BiCircle color="yellow" size="30" />
            ) : (
              <ImCross color="green" size="30" />
            )}{" "}
            it's your turn
          </h1>
        </div>

        {/* <div className="scoreBoard">
          <h1 className="stitle">Score Board</h1>
          <h2 className="score">
            <ImCross color="green" size="30" />
            <span className="scoreNum">:{cross}</span>
          </h2>
          <h2>
            <BiCircle color="yellow" size="30" />
            <span className="scoreNum">:{circle}</span>
          </h2>
          <button onClick={() => onClickReset("board")} className="btn">
            Reset Board
          </button>
          <button onClick={() => onClickReset("score")} className="btn">
            Reset Score
          </button>
        </div> */}
      </div>
      <div className="board">
        <div onClick={() => changeBoard(0)} className="box zero-zero">
          {getIcon(0)}
        </div>
        <div onClick={() => changeBoard(1)} className="box zero-one">
          {getIcon(1)}
        </div>
        <div onClick={() => changeBoard(2)} className="box zero-two">
          {getIcon(2)}
        </div>
        <div onClick={() => changeBoard(3)} className="box one-zero">
          {getIcon(3)}
        </div>
        <div onClick={() => changeBoard(4)} className="box one-one">
          {getIcon(4)}
        </div>
        <div onClick={() => changeBoard(5)} className="box one-two">
          {getIcon(5)}
        </div>
        <div onClick={() => changeBoard(6)} className="box two-zero">
          {getIcon(6)}
        </div>
        <div onClick={() => changeBoard(7)} className="box two-one">
          {getIcon(7)}
        </div>
        <div onClick={() => changeBoard(8)} className="box two-two">
          {getIcon(8)}
        </div>
      </div>
      <div className="header">
        <div className="scoreBoard">
          <h1 className="stitle">Score Board</h1>
          <h2 className="score">
            <ImCross color="green" size="30" />
            <span className="scoreNum">:{cross}</span>
          </h2>
          <h2>
            <BiCircle color="yellow" size="30" />
            <span className="scoreNum">:{circle}</span>
          </h2>
          <button onClick={() => onClickReset("board")} className="btn">
            Reset Board
          </button>
          <button onClick={() => onClickReset("score")} className="btn">
            Reset Score
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
