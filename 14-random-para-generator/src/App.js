import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [generatedPara, setGeneratedPara] = useState("");

  function GenerateRandomParagraph(length) {
    const characters =
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessar";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  const handleClick = (e) => {
    e.preventDefault();
    // if (typeof e.target.value !== "number") {
    //   console.log("wrong input value");
    //   return;
    // }
    const para = GenerateRandomParagraph(input);
    console.log(para);
    setGeneratedPara(para);
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br  from-slate-950 to-slate-800">
      <div className="flex gap-5 flex-col">
        <form className="flex flex-col gap-8">
          <label className="text-3xl font-bold mx-auto text-stone-200">
            Random Para Generator
          </label>
          <div className="flex gap-6 mx-auto">
            <input
              type="text"
              className="opacity-100 bg-gradient-to-br  from-slate-900 to-slate-800 text-zinc-100 font-bold border rounded-sm text-xl"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>

            <button
              className="bg-slate-300 rounded p-3 "
              type="submit"
              onClick={handleClick}
            >
              Generate
            </button>
          </div>
        </form>
        <p className="text-slate-200 text-wrap w-6/12 text-justify mx-auto text-lg font-weight">
          {generatedPara}
        </p>
      </div>
    </div>
  );
}

export default App;
