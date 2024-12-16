import React,{ useState }from 'react'
import '../index.css';
import axios from "axios";
function Home() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
  
    const handleInput = (e) => {
      setText(e.target.value);
    };
  
    const summarize = async () => {
      const options = {
        method: "GET",
        url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
        params: {
          url: text,
          lang: "en",
          engine: "2",
        },
        headers: {
          "x-rapidapi-key": "dc3b12b2c8msh55b2896b98e1356p1b9eebjsnb3010be16bd0",
          "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
        },
      };
      const response=await axios.request(options)
      setSummary(response.data.summary)
     
    }
    console.log(text);
  return (
    <>
     <div className="text-pink-700 text-xl">
        <div className="h-screen w-screen  flex items-center justify-center flex-col gap-y-10">
          <h1 className="text-2xl font-bold">Article Summarizer</h1>
          <div className="flex items-center justify-center gap-x-2">
            <input
              type="text"
              className="outline-none border-none rounded-lg px-6 py-2"
              onChange={handleInput}
            />
            <button
              className="bg-black text-white px-3 py-2 rounded-lg"
              onClick={summarize}
            >
              Click
            </button>
          </div>
          <div className="w-99 h-60 bg-green-300 rounded-lg overflow-x-hidden">
            {summary}
          </div>
        </div>
      </div>
    
    
    </>
   
  )
}

export default Home;
