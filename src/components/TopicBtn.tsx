import { Button } from "@headlessui/react";
import topics from "../fixtures/Topics";

type Props = {
  setTopic: (topic: string) => void;
  stopCall: () => void;
  isConnected: boolean;
};

const TopicBtn = ({ setTopic, isConnected, stopCall }: Props) => {
  return (
    <Button
    disabled={isConnected}  
    onClick={() => {
        if (isConnected) stopCall();
        setTopic(topics[Math.floor(Math.random() * topics.length)]);
      }}
      className={
        "text-sm rounded-lg hover:ring-1 ring-slate-600 px-2 py-1 m-1 transition ease-in-out hover:scale-110 duration-100 hover:bg-slate-100 data-[disabled]:invisible"
      }
    >
      New topic
    </Button>
  );
};

export default TopicBtn;
