"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function Hero() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center mt-10">
            <p className="text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-20">
                Darkr.ai
            </p>
            <p className="text-base md:text-lg mt-6 text-white font-normal inter-var text-center">
                Experience Cutting-Edge Image Segmentation with AI: Upload, Process, and Transform Your Images Effortlessly at Darkr.ai
            </p>
            <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-2">
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                        <span>
                            Get Started
                        </span>
                        <svg
                            fill="none"
                            height="32"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
            </div>
        </WavyBackground>
    );
}
