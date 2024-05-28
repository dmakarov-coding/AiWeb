import {Badge} from "@/components/ui/badge";
import { ClockIcon, ListBulletIcon, VideoCameraIcon} from '@heroicons/react/24/outline'
// import { BusinessExplanation } from "@/app/components/business_explanation";
import {QuestionMarkCircledIcon, Pencil1Icon} from "@radix-ui/react-icons";
import {Handshake, PhoneCall, Database, User} from "lucide-react";
import { UserCircle } from 'lucide-react';
import prisma from "@/app/lib/db";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { GetUSNumber, GetCADNumber } from "./components/Submitbuttons";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GeneratePrompt, SubmitButton } from "./components/Submitbuttons";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";
import { Star, Play } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getData() {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: "kp_17aff834e67c44a3a6d069bd9eb81137",
    },
    select: {
      promptInformation: true
    },
  });

  return data;
}

const stats = [
    { value: '24/7 Availability', name: 'Our AI Voice Assistant never sleeps, ensuring your customers receive support any time, day or night.' },
    { value: 'Human-like Interaction', name: 'Advanced natural language processing allows for realistic and engaging conversations.' },
    { value: 'Efficient Call Handling', name: 'Handles multiple calls simultaneously, reducing wait times and improving satisfaction.' },
    { value: 'Cost-effective Solution', name: 'Reduce overhead costs associated with hiring and training human receptionists.' },
    { value: 'Customizable Responses', name: 'Tailor the AI responses to match your desired unique voice and needs.' },
    { value: 'Call Transferring', name: 'Easily transfer calls to the appropriate department or individual.' },
];


const features_for_points = [
    {
      name: 'Call Time Utilization',
      description: 'Keep track of how much time is being spent on calls with a clear display of call time utilization.',
      icon: ClockIcon,
    },
    {
      name: 'Call Recording',
      description: 'Easily toggle call recording on or off to capture important conversations. Retrieve recordings by emailing support with specific call dates.',
      icon: VideoCameraIcon,
    },
    {
      name: 'Call Logs',
      description: 'Access a comprehensive list of all incoming and outgoing calls, complete with statuses, phone numbers, dates, and call durations.',
      icon: ListBulletIcon,
    },
  ]
  
const audioFiles = [
    {
      id: 1,
      name: "Ryan",
      src: "https://www.dropbox.com/scl/fi/8rn1hbypgc9n9po640dpn/output.mp3?rlkey=dpv63ne26qgtkobkbquw2zrhr&st=l4o54d4u&raw=1"
    },
    {
      id: 2,
      name: "Richard",
      src: "https://www.dropbox.com/scl/fi/z8294ludquoe77t771ti5/richard.mp3?rlkey=ng2ozkfuia9b77pbyph6hb5ux&st=16uqq4m4&raw=1"
    },
    {
      id: 3,
      name: "Ayanna",
      src: "https://www.dropbox.com/scl/fi/lxqzd7bjlth65il02at3u/ayanna.mp3?rlkey=4z2h805xh3r5ivnr0uan3qzap&st=bjokx7ry&raw=1"
    }
  ];

const features_and_stuff = [
    {
      name: 'Tailored AI Receptionists',
      description:
        'Start by completing a simple questionnaire about your business. Our platform uses your responses to create a customized AI receptionist.',
      icon: User,
    },
    {
      name: 'Editable AI Prompts',
      description:
        'Once your AI receptionist is set up, you can easily edit and refine the prompts to better match your business’s needs and tone.',
      icon: Pencil1Icon,
    },
    {
      name: 'Call Management',
      description:
        'View detailed call logs to track interactions and record calls for quality assurance and training purposes.',
      icon: Database,
    },
    {
      name: 'Dedicated Business Number',
      description:
        'Receive a dedicated phone number for your AI receptionist. Use it as your main business line or forward calls to it, ensuring you never miss a client call.',
      icon: PhoneCall,
    },
  ]



export default async function Home() {
  const data = await getData();
  async function handleFormSubmitSaveData(formData: FormData) {
    "use server";

    const promptInfo = formData.get("promptInfo") as string;
    const userId = "kp_17aff834e67c44a3a6d069bd9eb81137";

    if (!userId) {
      console.error("User ID is undefined");
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: { promptInformation: promptInfo ?? undefined },
    });

    console.log("promptInformation info updated:", promptInfo);

    revalidatePath("/", "layout");
    return promptInfo;
  }

  

  return (
      <>
          {/* Header */}
          <div className="">
              <main className="container mx-auto">
                  <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 pb-44 text-center">
                      <div className="justify-center hidden md:flex">
                      </div>
                      <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">The First Conversational <span className="text-blue-700">AI Voice Assistant</span></h1>
                      <h3 className="md:text-2xl">No more missed calls!</h3>
                      <br />
                      <h2 className="md:text-2xl">
                      Your first virtual receptionist that knows everything you give it inside and out, ready to answer questions 24/7 
                      </h2>
                      <div
                          className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
                          <div
                              className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                          </div>
                          <div
                              className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
                          <div
                              className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
                      </div>
                  </div>
              </main>
          </div>

            {/* Hyperrealistic Voices*/}
            <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 border-b border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold mb-10 text-blue-500 dark:text-blue-300 drop-shadow-lg">
                    Experience Hyper-Realistic Voices
                    </h1>
                    
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center pb-6">
                    Our AI Voice Assistants are meticulously crafted to replicate human speech patterns, intonations, and nuances, ensuring a remarkably natural and immersive experience. With advanced speech synthesis technology, they engage users with a level of realism that fosters trust and familiarity.
                    </p>

                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <dt className="text-3xl font-bold leading-7 text-black dark:text-white">Ryan</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                        <audio controls className="">
                            <source src="https://www.dropbox.com/scl/fi/8rn1hbypgc9n9po640dpn/output.mp3?rlkey=dpv63ne26qgtkobkbquw2zrhr&st=l4o54d4u&raw=1" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <dt className="text-3xl font-bold leading-7 text-black dark:text-white">Richard</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                        <audio controls className="">
                            <source src="https://www.dropbox.com/scl/fi/z8294ludquoe77t771ti5/richard.mp3?rlkey=ng2ozkfuia9b77pbyph6hb5ux&st=16uqq4m4&raw=1" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <dt className="text-3xl font-bold leading-7 text-black dark:text-white">Ayanna</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                        <audio controls className="">
                            <source src="https://www.dropbox.com/scl/fi/lxqzd7bjlth65il02at3u/ayanna.mp3?rlkey=4z2h805xh3r5ivnr0uan3qzap&st=bjokx7ry&raw=1" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>

            <section className="bg-gradient-to-b from-background to-transparent via-background via-90% relative">
                {/* First Description */}
                <div className="relative isolate overflow-hidden py-24 sm:py-32">
                    <div
                        className="absolute inset-0 flex items-center justify-center -z-10 transform-gpu blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="w-[68.5625rem] h-[68.5625rem] bg-gradient-radial from-[#ff4694] to-transparent opacity-20"
                            style={{
                                background: 'radial-gradient(circle, #ff4694, #ffffff)',
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
                        <div className="max-w-2xl">
                            <h2 className="font-bold text-3xl sm:text-5xl mb-4">A Truly Human-Like Conversational AI Voice Assistant</h2>
                            <p className="mt-4 text-lg leading-8">
                                Ensuring no questions go unanswered.
                            </p>
                        </div>
                        <div className="mx-auto mt-5 max-w-2xl lg:max-w-none">
                            <dl className="mt-8 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.name} className="flex flex-col items-center text-center">
                                        <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
                                        <dt className="text-base leading-7">{stat.name}</dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
          </section>
          <p className="text-center p-4 text-lg mb-4">Call <strong>+1 (343) 307-4471</strong> to talk to your virtual assistant.</p>
          <div className="flex justify-center">
          
            <Card className="w-3/4 p-2 dark:bg-gray-800 shadow-lg rounded-lg bg-white">
              <div className="w-full">
                {/* Form stuff */}
                <form action={handleFormSubmitSaveData}>
                  <h2 className="text-2xl font-bold mb-1">The Receptionist&apos;s Prompt</h2>
                  <div className="grid gap-1.5">
                    <Textarea
                      name="promptInfo"
                      placeholder="Here are the instructions for your AI Receptionist. This is the information that your receptionist will use to interact with callers. Feel free to edit it!"
                      id="promptInfo"
                      maxLength={30000}
                      defaultValue={data?.promptInformation ?? undefined}
                      className="form-textarea block w-full"
                      style={{ height: '50vh' }}
                    />
                  </div>
                  <br />
                  <SubmitButton />
                </form>
              </div>
            </Card>
          </div>

      </>
  );
}