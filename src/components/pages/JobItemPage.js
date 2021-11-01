import { Link, Redirect } from "react-router-dom";
import PageContainer from "../PageContainer";
import {
    COMPANY_APPLICATION_URL,
    COMPANY_NAME,
    COMPANY_URL,
    JOBS_URL,
    JOB_DESCRIPTION,
    JOB_TITLE
} from "@constants/";

const JobItemPage = job => {
    const {
        location: {
            state: {
                job: {
                    [JOB_TITLE]: jTitle,
                    [JOB_DESCRIPTION]: jDesc,
                    companies: {
                        [COMPANY_APPLICATION_URL]: cAppUrl,
                        [COMPANY_NAME]: cName
                    }
                }
            }
        }
    } = job;

    const getContent = () => {
        return (

            <div className=" pt-12 pb-16 px- sm:pt-16 sm:px-6 ">

                <div className="text-base max-w-prose mx-auto ">
                    <img
                        className="inline-block lg:left-14 lg:w-14 h-14 w-14 rounded-md"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Work with us</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Our Process
                    </h3>
                    <div className="lg:grid lg:grid-cols-2 lg:gap- lg:items-start">

                        <p className="mt-8 text-lg text-white ">
                            {`${jDesc}`}
                        </p>
                        <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                            <svg
                                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >

                                <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                            </svg>
                            <blockquote className="relative bg-white rounded-lg shadow-lg">
                                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                                   <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl"> {`${cName}`}</h3>
                                    <div className="relative text-lg text-gray-700 font-medium mt-8">
                                        <svg
                                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            
                                        </svg>
                                        <p className="relative">
                                            Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                            Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin
                                            massa, lectus.
                                        </p>
                                    </div>
                                </div>
                                <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                                    <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                                        <img
                                            className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                                            src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                                        <p className="text-white font-semibold sm:inline">TEST 123</p>
                                        <p className="sm:inline">CEO at Workcation</p>
                                    </span>
                                </cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="mt-5  prose prose-indigo text-white">
                    




                    {/* <Link to={JOBS_URL}>Back to Jobs Jobs</Link> */}
                    <p>
                        {/*UPDATE THIS URL PATH TO POINT TO COMPANY PAGE*/}
                        <Link to={COMPANY_URL}></Link>
                    </p>
                </div>



                <div className="md:absolute my-7 lg:ml-64">
                    <Link to={COMPANY_URL}>
                        <button

                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                        >
                            Apply
                        </button>
                    </Link>

                </div>
                <div className="md:absolute my-7 lg:ml-96">
                    <Link to={JOBS_URL}>
                        <button
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                        >
                            Back To Jobs
                        </button>
                    </Link>

                </div>
            </div>





        )
    }

    return (
        PageContainer(getContent(), jTitle, jDesc)
    )
};

export default JobItemPage;
