import Card from "./Components/Card";
function App() {
  return (
    <div className="App bg-blue-950	h-screen w-screen grid place-content-center">
      <Card 
      imgUrl={"https://hips.hearstapps.com/hmg-prod/images/atv-selena-gomez-my-mind-and-me-key-art-1663335059.jpg?crop=1.00xw:0.745xh;0,0.0774xh&resize=1200:*"}
      name={"Salena Gomez"}
      place={"London"}
      followers={"80k"}
      likes={"806k"}
      photos={"1.4k"}
      />
    </div>
  );
}

export default App;
