import React from "react";

function Footer(props) {
  const year = new Date().getFullYear();

  function handleClick(){
    props.onNext();

  }
  function handleClickprev(){
    props.onPrev();


  }

  return (
    <footer>
      <button class="navigators" onClick={handleClickprev}>prev </button>
      <button class="navigators" onClick={handleClick}>next </button>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
