"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function MainNavbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-10" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <a href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </a>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Conversational Chat"
                            href="/chat-with-image"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Chat with AI for images in real-time"
                        />
                        <ProductItem
                            title="Image Captioning"
                            href="/caption-image"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Caption your images using AI in real-time"
                        />
                        <ProductItem
                            title="Object Detection"
                            href="/object-detection"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Detect objects in images using AI in real-time"
                        />
                        <ProductItem
                            title="Optical Character Recognition"
                            href="/ocr"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Extract text from images using AI in real-time"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="GitHub">
                    <div>
                        <ProductItem
                            title="Github"
                            href="https://github.com/MihirRajeshPanchal/darkr.ai"
                            src="https://avatars.githubusercontent.com/u/78205431?v=4"
                            description="GitHub Repository for Darkr.ai (https://github.com/MihirRajeshPanchal/darkr.ai)"
                        />
                    </div>
                </MenuItem>
                <a href="/login">
                    <MenuItem setActive={setActive} active={active} item="Login/SignUp">
                    </MenuItem>
                </a>
            </Menu>
        </div>
    );
}
