const NewGameButton = ({ resetGame , fullReset}) => {
    return (
<button data-testid="newGameButton" onClick={fullReset}>
  New Game
</button>

    );
  };
  
  export default NewGameButton;
  