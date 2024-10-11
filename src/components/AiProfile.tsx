import assistant from "../assets/robot_head_tiny.jpeg";

const offsetClasses = [
  "ring-8 ring-blue-700/0",
  "ring-8 ring-blue-700/15",
  "ring-8 ring-blue-700/30",
  "ring-8 ring-blue-700/45",
  "ring-8 ring-blue-700/50",
  "ring-8 ring-blue-700/55",
  "ring-8 ring-blue-700/60",
  "ring-8 ring-blue-700/70",
  "ring-8 ring-blue-700/90",
  "ring-8 ring-blue-700",
  "ring-8 ring-blue-700",
];

type Props = {
  volume: number;
};

const AiProfile = ({ volume }: Props) => {
  return (
    <div
      className={
        `overflow-hidden max-w-sm mx-auto rounded-full ` +
        offsetClasses[Math.floor(volume * 11)]
      }
    >
      <img src={assistant} alt="Argumentative assistant" className={``} />
    </div>
  );
};

export default AiProfile;
