import { Player } from "./components/Player";

function App() {
  return (
    <main>
      <div className="game-container">
        <ol className="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/* GAME BOARD */}
      </div>
    </main>
  );
}

export default App;