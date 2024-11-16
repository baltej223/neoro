"use client";

import Ripple from "@/components/ui/ripple";
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"
import { ChevronRight } from "lucide-react"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"



export default function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            New Window <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>New Incognito Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Email link</MenubarItem>
                                <MenubarItem>Messages</MenubarItem>
                                <MenubarItem>Notes</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>Find</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Search the web</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Find...</MenubarItem>
                                <MenubarItem>Find Next</MenubarItem>
                                <MenubarItem>Find Previous</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>Cut</MenubarItem>
                        <MenubarItem>Copy</MenubarItem>
                        <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                        <MenubarCheckboxItem checked>
                            Always Show Full URLs
                        </MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset>
                            Reload <MenubarShortcut>⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled inset>
                            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Social Links</MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Edit...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            <div
                className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl" style={{height:"650px"}}>
                <Ripple/>

            </div>
            <div className="flex flex-row w-full gap-2">
                    <Textarea
                    placeholder="Type your message here."
                    className={"border-4 Main_textarea"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                <Button variant="outline" size="icon" className="sendButton" style={{marginTop:"15px"}} onClick={() => askAi(inputValue)}>
                    <ChevronRight />
                </Button>
            </div>
        </>
    );
}
async function askAi(prompt :string){
const Your_API_Key = "AIzaSyANOLwAhrItMbthvQRY9XE1P9HatdsKVCc";
const genAI = new GoogleGenerativeAI(Your_API_Key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001"});

// const prompt = "Tell me a joke"

const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
console.log(text);
const utterance = new SpeechSynthesisUtterance(text);
// Optional: Set properties like language, pitch, rate, volume
utterance.lang = 'en-US';  // Language
utterance.pitch = 1;       // Pitch (0-2)
utterance.rate = 1;        // Speed of speech (0.1-10)
utterance.volume = 1;      // Volume (0-1)

// Speak the text
window.speechSynthesis.speak(utterance);
}