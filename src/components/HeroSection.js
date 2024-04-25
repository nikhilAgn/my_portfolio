import React from 'react'

export const HeroSection = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center py-16">
                <h1 class="text-5xl font-bold">Portfolio</h1>
                <div class="mt-8">
                    <img src="https://placehold.co/150x150" alt="Profile Image" class="rounded-full mx-auto" />
                </div>
                <h2 class="text-3xl font-bold mt-4">Nikhil Agnihotri</h2>
                <p class="text-sm mt-2">ICPC 2021-22 Regionalist | Software and Integrations Developer ...</p>
                <div class="bg-zinc-800 mx-auto mt-8 p-4 w-3/4">
                    <div class="bg-zinc-800 text-white p-6 max-w-4xl mx-auto rounded-lg text-center">
                        <h2 class="text-xl font-bold mb-4">BIO</h2>
                        <p>
                            I am a passionate programmer with approximately 3 years of coding experience. Moreover, I am
                            currently pursuing Bachelors in Information Technology at Pimpri Chinchwad College of
                            Engineering in Pune. I've a good coding experience in domains such as C++, Flutter and I am
                            currently exploring Firebase and Flutter.
                        </p>
                        <p class="mt-4">
                            <strong>Working status</strong><br />Software and Integrations Developer at Data Insights DWC
                            LLC
                        </p>
                        <div class="flex gap-2 mt-4 justify-center">
                            <span class="bg-zinc-700 px-4 py-1 rounded">C++</span>
                            <span class="bg-zinc-700 px-4 py-1 rounded">Flutter</span>
                            <span class="bg-zinc-700 px-4 py-1 rounded">Firebase</span>
                            <span class="bg-zinc-700 px-4 py-1 rounded">Dart</span>
                            <span class="bg-zinc-700 px-4 py-1 rounded">Java and Spring Boot</span>
                            <span class="bg-zinc-700 px-4 py-1 rounded">Python</span>
                        </div>
                        <h3 class="text-xl font-bold mt-6 mb-4">PROFILE LINKS</h3>
                        <div class="flex gap-4 justify-center">
                            <a href="#" class="bg-zinc-700 p-3 rounded-full">
                                <img src="https://placehold.co/24x24" alt="LinkedIn" />
                            </a>
                            <a href="#" class="bg-zinc-700 p-3 rounded-full">
                                <img src="https://placehold.co/24x24" alt="GitHub" />
                            </a>
                            <a href="#" class="bg-zinc-700 p-3 rounded-full">
                                <img src="https://placehold.co/24x24" alt="Website" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}