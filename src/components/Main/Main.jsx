import { useContext, useRef } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);


  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const paragraph4Ref = useRef(null);


  const handleClick1 = () => {
    // Access the inner text of the <p> tag using paragraphRef.current.innerText
    const inner1Text = paragraph1Ref.current.innerText;
    let input = inner1Text;
    onSent(input);
  };

  const handleClick2 = () => {
    // Access the inner text of the <p> tag using paragraphRef.current.innerText
    const inner2Text = paragraph2Ref.current.innerText;
    let input = inner2Text;
    onSent(input);
  };
  const handleClick3 = () => {
    // Access the inner text of the <p> tag using paragraphRef.current.innerText
    const inner3Text = paragraph3Ref.current.innerText;
    let input = inner3Text;
    onSent(input);
  };
  const handleClick4 = () => {
    // Access the inner text of the <p> tag using paragraphRef.current.innerText
    const inner4Text = paragraph4Ref.current.innerText;
    let input = inner4Text;
    onSent(input);
  };

  const handleInputKeyPress = (event)=>{
    if(event.key === 'Enter'){
      event.preventDefault();
      onSent();
    }
  }


  return (
    <div className="main">
      <div className="nav">
        <p>Genesis</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {showResult ? (
          <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>

          <div className="resultData">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                  <hr />
                  <hr />
                  <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
            
          
        ) : (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div onClick={handleClick1} className="card">
                <p ref={paragraph1Ref}>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div onClick={handleClick2} className="card">
                <p ref={paragraph2Ref}>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div onClick={handleClick3} className="card">
                <p ref={paragraph3Ref}>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div onClick={handleClick4} className="card">
                <p ref={paragraph4Ref}>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
            </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              onKeyDown={handleInputKeyPress}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Genesis may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
