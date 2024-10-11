import { Button } from '@headlessui/react'
import { SyncLoader } from 'react-spinners'

type Props = {
  isConnecting: boolean,
  startCall: () => void,
  stopCall: () => void,
}

const StartCallBtn = ({isConnecting, startCall, stopCall}: Props) => {
  return (
    <Button
    onClick={isConnecting ? stopCall : startCall}
    className={
      "rounded-full bg-transparent hover:ring ring-slate-600 text--black px-4 py-4 text-lg transition ease-in-out hover:scale-110 duration-100 hover:bg-slate-100"
    }
  >
    {isConnecting ? (
      <SyncLoader />
    ) : (
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mx-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p>Change my mind</p>
      </div>
    )}
  </Button>
  )
}

export default StartCallBtn