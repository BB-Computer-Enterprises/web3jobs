// import { useState, useEffect } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckIcon } from '@heroicons/react/outline'

const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const growthFeatures = [
    'Quia rem est sed impedit magnam',
    'Dolorem vero ratione voluptates',
    'Qui sed ab doloribus voluptatem dolore',
    'Laborum commodi molestiae id et fugiat',
    'Nam ut ipsa nesciunt culpa modi dolor',
]

const paymentOptions = () => {
    return (
        <div className="sm:col-span-6">
            <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                    <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                        <div className="flex-1 flex flex-col">
                            <div className="bg-white px-6 py-10">
                                <div>
                                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                                        Hobby
                                    </h3>
                                    <div className="mt-4 flex items-center justify-center">
                                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                                            <span className="font-extrabold">79</span>
                                        </span>
                                        <span className="text-xl font-medium text-gray-500">/month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                                <ul className="space-y-4">
                                    {hobbyFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                            </div>
                                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <div className="rounded-lg shadow-md">
                                        <a
                                            href="/"
                                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                            aria-describedby="tier-hobby"
                                        >
                                            Start your trial
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                    <div className="relative z-10 rounded-lg shadow-xl">
                        <div
                            className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                            aria-hidden="true"
                        />
                        <div className="absolute inset-x-0 top-0 transform translate-y-px">
                            <div className="flex justify-center transform -translate-y-1/2">
                                <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                                    Most popular
                                </span>
                            </div>
                        </div>
                        <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                            <div>
                                <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                                    Growth
                                </h3>
                                <div className="mt-4 flex items-center justify-center">
                                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                                        <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                                        <span className="font-extrabold">149</span>
                                    </span>
                                    <span className="text-2xl font-medium text-gray-500">/month</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                            <ul className="space-y-4">
                                {growthFeatures.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <div className="rounded-lg shadow-md">
                                    <a
                                        href="/"
                                        className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                                        aria-describedby="tier-growth"
                                    >
                                        Start your trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                    <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                        <div className="flex-1 flex flex-col">
                            <div className="bg-white px-6 py-10">
                                <div>
                                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                                        Scale
                                    </h3>
                                    <div className="mt-4 flex items-center justify-center">
                                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                                            <span className="font-extrabold">349</span>
                                        </span>
                                        <span className="text-xl font-medium text-gray-500">/month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                                <ul className="space-y-4">
                                    {scaleFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                            </div>
                                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <div className="rounded-lg shadow-md">
                                        <a
                                            href="/"
                                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                            aria-describedby="tier-scale"
                                        >
                                            Start your trial
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PostAJobPage = () => {
    return (
        <Formik
            initialValues={{
                contactEmail: '',
                companyName: '',
                jobTitle: '',
                description: '',
                applicationURL: '',
            }}
            validationSchema={Yup.object({
                contactEmail: Yup.string().email('Invalid email address').required('Required'),
                companyName: Yup.string().required('Company name Required'),
                jobTitle: Yup.string().required('Job title Required'),
                description: Yup.string().min(20, 'That\'s a pretty short description, dont you think 🤔?').required('Description Required'),
                applicationURL: Yup.string().required('Application URL Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >{formik =>
        (
            <div className="dark:bg-gray-700">
                <div className="container mx-auto sm:px-6 lg:px-8 p-8 lg:py-20 lg:px-52">
                    <form className="space-y-8" onSubmit={formik.handleSubmit}>
                        <div className="space-y-8">
                            <div>
                                <div className="pb-8">
                                    <h3 className="text-5xl lg:text-6xl leading-tight font-medium dark:text-white text-gray-900">The first step to your next hire 👇</h3>
                                    <p className="mt-6 text-2xl lg:text-3xl dark:text-white text-gray-500">
                                        It will only take 2 minutes ⏳
                                    </p>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="contactEmail" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                            Company Email
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                id="contactEmail"
                                                name="contactEmail"
                                                type="email"
                                                autoComplete="email"
                                                className="lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                                                {...formik.getFieldProps('contactEmail')}
                                            />
                                            {/* TODO: Update the error UI */}
                                            {formik.touched.contactEmail && formik.errors.contactEmail ? (
                                                <div>{formik.errors.contactEmail}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label htmlFor="contactEmail" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                            Company Name
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                id="companyName"
                                                name="companyName"
                                                type="text"
                                                autoComplete="organization"
                                                className="lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                                                {...formik.getFieldProps('companyName')}
                                            />
                                            {/* TODO: Update the error UI */}
                                            {formik.touched.companyName && formik.errors.companyName ? (
                                                <div>{formik.errors.companyName}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label htmlFor="contactEmail" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                            Job Title
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                id="jobTitle"
                                                name="jobTitle"
                                                type="text"
                                                placeholder="i.e. Senior Solidity Engineer"
                                                className="lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                                                {...formik.getFieldProps('jobTitle')}
                                            />
                                            {/* TODO: Update the error UI */}
                                            {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                                <div>{formik.errors.jobTitle}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    {paymentOptions()}

                                    <div className="sm:col-span-6">
                                        <label htmlFor="description" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                            Job Description
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={15}
                                                placeholder="Describe the role - please use markdown formatting 🤙"
                                                className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 md:text-xl block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                                                {...formik.getFieldProps('description')}
                                            />
                                            {/* TODO: Update the error UI */}
                                            {formik.touched.description && formik.errors.description ? (
                                                <div>{formik.errors.description}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label htmlFor="application url" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                            Apply URL (or email)
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md md:text-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                                https://
                                            </span>
                                            <input
                                                id="applicationURL"
                                                name="applicationURL"
                                                type="text"
                                                placeholder="i.e. company.com/careers/apply"
                                                className="lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                {...formik.getFieldProps('applicationURL')}
                                            />
                                            {/* TODO: Update the error UI */}
                                            {formik.touched.applicationURL && formik.errors.applicationURL ? (
                                                <div>{formik.errors.applicationURL}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="block ">
                                <button
                                    type="submit"
                                    className="block w-full lg:w-3/5 lg:h-20 lg:text-4xl lg:justify-center md:text-3xl justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Post that Job 🚀!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )}

        </Formik>


    )
}

// return (
//     <div className="container mx-auto sm:px-6 lg:px-8">{form(formik)}</div>
// );
// };

export default PostAJobPage;