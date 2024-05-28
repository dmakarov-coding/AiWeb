"use client";
import { WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit mr-4">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit mr-4" type="submit">
          Save Now
        </Button>
      )}
    </>
  );
}

export function TurnOffButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 ease-in-out" type="submit">
          Turn Off
        </Button>
      )}
    </>
  );
}

export function TurnOnButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit mr-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 ease-in-out" type="submit">
          Turn On
        </Button>
      )}
    </>
  );
}


export function GeneratePrompt() {
  const { pending } = useFormStatus();
  
  const buttonStyle = `text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 
                        hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 
                        focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                        flex items-center justify-center space-x-2`;

  return (
    <>
      {pending ? (
        <button disabled className={buttonStyle}>
          <Loader2 className="animate-spin" style={{ width: 16, height: 16 }} /> Please Wait
        </button>
      ) : (
        <button type="submit" className={buttonStyle}>
          <span>Generate Receptionist Script</span>
          <WandSparkles style={{ width: 20, height: 20 }} />
        </button>
      )}
    </>
  );
}



export function GetUSNumber() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          Get US Phone number
        </Button>
      )}
    </>
  );
}

export function GetCADNumber() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          Get Canadian Phone number
        </Button>
      )}
    </>
  );
}

export function StripeSubscriptionCreationButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      )}
    </>
  );
}

export function StripePortal() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          View payment details / Edit Subscription
        </Button>
      )}
    </>
  );
}
