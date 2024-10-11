import { Button } from "@headlessui/react";

type Props = {
  stopCall: () => void;
};

const StopCallBtn = ({ stopCall }: Props) => {
  return (
    <Button
      onClick={stopCall}
      className={
        "rounded-full bg-transparent border-2 border-red-600 text-red-800 px-4 py-4 text-lg"
      }
    >
      <p>Stop talking.</p>
    </Button>
  );
};

export default StopCallBtn;
