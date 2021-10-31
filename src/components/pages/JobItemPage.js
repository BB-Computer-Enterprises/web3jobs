import { Link } from "react-router-dom";
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
    const applyJob = () => {
        <Link to={COMPANY_URL}></Link>
    }
    const getContent = () => {
        return (

            <div className=" pt-12 pb-16 px- sm:pt-16 sm:px-6 ">


                <div className="text-base max-w-prose mx-auto">
                    <img
                        className="inline-block lg:left-14 lg:w-14 h-14 w-14 rounded-md"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Work with us</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Our Process
                    </h3>
                    <p className="mt-8 text-lg text-white ">
                        {`${jDesc}`}
                    </p>
                    <div className="mt-5  prose prose-indigo text-white">
                        <p>
                            {`${jDesc}`}
                        </p>

                        <p className="max-w-7xl mx-auto sm:px-6 lg:px-8">Description: {`${jDesc}`}</p>
                        <p>Apply URL: {`${cAppUrl}`}</p>

                        <Link to={JOBS_URL}>Back to Jobs Jobs</Link>
                        <p>
                            {/*UPDATE THIS URL PATH TO POINT TO COMPANY PAGE*/}
                            <Link to={COMPANY_URL}></Link>
                        </p>
                    </div>
                </div>


                <div className="md:absolute my-7">
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onSubmit={() => {
                            applyJob()
                        }}
                    >
                        Apply
                    </button>

                </div>
                <div className="md:absolute my-7">
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onSubmit={() => {
                            applyJob()
                        }}
                    >
                        Back To Jobs
                    </button>

                </div>
            </div>



        )
    }

    return (
        PageContainer(getContent(), jTitle, jDesc)
    )
};

export default JobItemPage;
