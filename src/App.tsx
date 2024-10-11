import { useEffect, useState } from "react";

import "./App.css";

import Vapi from "@vapi-ai/web";

import getOptions from "./utils/assistantOptions";

import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import AiProfile from "./components/AiProfile";
import StartCallBtn from "./components/StartCallBtn";
import StopCallBtn from "./components/StopCallBtn";
import TopicBtn from "./components/TopicBtn";
import { Models, Topics, Voices } from "./fixtures";
import AdvancedOptions from "./components/AdvancedOptions";

const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);

function App() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [volume, setVolume] = useState(0);

  // hook into vapi events
  useEffect(() => {
    vapi.on("call-start", () => {
      console.log("starting call");
      setIsConnecting(false);
      setIsConnected(true);
    });
    vapi.on("call-end", () => {
      setIsConnecting(false);
      setIsConnected(false);
    });
    vapi.on("speech-start", () => {
      // console.log("assistent started speaking");
    });
    vapi.on("speech-end", () => {
      // console.log("assistent stopped speaking");
    });
    vapi.on("volume-level", (vol: number) => {
      setVolume(vol);
    });
    vapi.on("error", (err) => {
      vapi.stop();
      console.log("Something went wrong:", err.error);
    });
  }, []);

  const startCall = () => {
    setIsConnecting(true);
    const options = getOptions({ topic, model, voice }) as CreateAssistantDTO;
    try {
      vapi.start(options);
    } catch (error) {
      console.log("trycatch error", error);
    }
  };

  const stopCall = () => {
    vapi.stop();
    setIsConnecting(false);
    setIsConnected(false);
  };

  const [topic, setTopic] = useState(
    Topics[Math.floor(Math.random() * Topics.length)]
  );
  const [model, setModel] = useState(() => {
    const { model, provider } =
      Models[Math.floor(Math.random() * Models.length)];
    return { model, provider };
  });
  const [voice, setVoice] = useState(() => {
    const { voiceId, provider } =
      Voices[Math.floor(Math.random() * Voices.length)];
    return { voiceId, provider };
  });

  return (
    <>
      <div className=" h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <AiProfile volume={volume} />

          <div className="m-4">
            <h1 className="text-2xl">{topic}</h1>
          </div>


          <TopicBtn setTopic={setTopic} />

          <div className="m-8">
            {isConnected ? (
              <StopCallBtn stopCall={stopCall} />
            ) : (
              <StartCallBtn
              isConnecting={isConnecting}
              startCall={startCall}
              stopCall={stopCall}
              />
            )}
          </div>
            <AdvancedOptions setModel={setModel} setVoice={setVoice} />
        </div>
      </div>
    </>
  );
}

export default App;
