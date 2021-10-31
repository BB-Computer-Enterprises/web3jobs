import { useState } from "react";

export default function HomePage() {
    const [email, setEmail] = useState("");

    const formSubmission = event => {
        event.preventDefault();
        const data = {
            formName: 'formName', formEmail: email, formMessage: 'New Web3 Signup'
        }

        fetch('https://behcfjv89k.execute-api.us-east-1.amazonaws.com/default/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Api-Key': '0vSWfAWdLV38saVPNuShf9tMNzvHfEgs29PMxU9L'
            },
            body: JSON.stringify(data)
        }).then(result => {
            console.log(result)
            return true;
        }).catch(err => {
            return false;
        })
    }

    return (
        <div className="relative overflow-hidden">
            <main>
                <div className="pt-10 bg-gray sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left ">
                                <div className="lg:py-24">
                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">Web3Jobs</span>
                                        <span className="block text-indigo-400">help build the decentralized web</span>
                                    </h1>
                                    <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Be part of the future of the web with X,XXX other people 👇
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <form onSubmit={formSubmission} className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                            <div className="sm:flex">
                                                <div className="min-w-0 flex-1">
                                                    <label htmlFor="email" className="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                                    <button
                                                        type="submit"
                                                        className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                                                    >
                                                        Sign up for free
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:-mb-48 lg:m-0 lg:relative">
                                <div className="px-4 sm:max-w-2xl sm:px-6 ">
                                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0"
                                        src="https://yhsyqsnormpfxbbippdb.supabase.in/storage/v1/object/public/assets/heroimage.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}