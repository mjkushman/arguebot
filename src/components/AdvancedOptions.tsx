import React, { Dispatch, SetStateAction, useState } from "react";
import { Models, Voices } from "../fixtures";
import { Button, Field, Fieldset, Label, Select } from "@headlessui/react";

type Props = {
  setModel: Dispatch<SetStateAction<{ model: string; provider: string }>>;
  setVoice: Dispatch<SetStateAction<{ voiceId: string; provider: string }>>;
};

const AdvancedOptions = ({ setModel, setVoice }: Props) => {
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const provider = selectedOption.getAttribute("data-provider") || "openai";
    const model = selectedOption.getAttribute("value") || "gpt-4";
    setModel({ model, provider });
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const provider = selectedOption.getAttribute("data-provider") || "11labs";
    const voiceId = selectedOption.getAttribute("value") || "gpt-4";
    setVoice({ voiceId, provider });
  };

  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col">
      

      <Button onClick={() => setHidden(!hidden)} className={"text-sm"}>
        {hidden ? "Advanced options" : "Close advanced options"}
      </Button>
      
      
        <Fieldset
          disabled={hidden}
          className="flex flex-row data-[disabled]:invisible gap-4"
        >
          <Field>
            <Label className={"mx-2 font-semibold"}>Language Model</Label>
            <Select onChange={handleModelChange} aria-label="Language Model">
              {Models.map((m) => (
                <option
                  value={m.model}
                  data-provider={m.provider}
                  key={m.model}
                >
                  {m.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label className={"mx-2 font-semibold"}>AI Voice</Label>
            <Select onChange={handleVoiceChange} aria-label="AI Voice">
              {Voices.map((v) => (
                <option
                  value={v.voiceId}
                  data-provider={v.provider}
                  key={v.voiceId}
                >
                  {v.label}
                </option>
              ))}
            </Select>
          </Field>
        </Fieldset>
      </div>
    
  );
};

export default AdvancedOptions;
