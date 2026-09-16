import React from "react"; //импортировали службы react

class Square extends React.Component {
  //Создаем класс square (квадрата)
  state = { size: "350" }; //начальное состояние ползунка и квадрата

  square = (event) => {
    // функция, которая будет изменять состояние квадрата
    this.setState({ size: event.target.value }); // изменяем состояние квадрата по ползунку
  };

  render() {
    const { size } = this.state; // получаем состояние квадрата
    return (
      <>
        <h1>Выберите размер квадрата:</h1>
        <input
          type="range"
          min="100"
          max="600"
          value={size}
          onChange={this.square}
        />{" "}
        {/* ползунок для изменения размера квадрата */}
        <h2>
          размер квадрата: {size}px * {size}px
        </h2>
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "green",
            margin: "20px auto",
          }}
        />
      </>
    );
  }
}

export default Square;
