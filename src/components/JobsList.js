
import { Link } from "react-router-dom";
import { capitalize, makeFriendlyUrl } from "@util/sanitize";
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    COMPANY_NAME,
    JOBS_URL,
    JOB_DATE_POSTED,
    JOB_DESCRIPTION,
    JOB_ID,
    JOB_TITLE
} from "@constants/";
import { JOB_TAGS } from "@config/constants";

// function that will destructure the job object
// it pulls out the title, id and company name to be used in the URL
const generateLinkURL = job => {
    const { [JOB_TITLE]: title, [JOB_ID]: id, companies: { [COMPANY_NAME]: cName } } = job;
    return `${JOBS_URL}/${makeFriendlyUrl(title)}-${makeFriendlyUrl(cName)}/${id}`
}
const sepratetags = job =>{
   return job.map(jobs =>(
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
         {jobs}
         </span>
   )) 
}

const JobsList = ({ jobs, isLoading, tag }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md pr-10 pl-10">
            <ul role="list" className="divide-y divide-gray-200">

                {jobs.length ? (
                    jobs.map((job) => (
                       
                        <li key={job[JOB_ID]}>
                            {console.log(job)}
                            <Link to={{ pathname: generateLinkURL(job), state: { job } }}><a className="block hover:bg-gray-50">
                                <div className="px-4 py-4 flex items-center sm:px-6">
                                    <span className="inline-block relative">
                                        <img
                                            className="inline-block h-12 w-12 rounded-md"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
                                    </span>
                                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                        <div className="truncate">
                                            <div className="flex text-sm"></div>

                                            <Link to={{ pathname: generateLinkURL(job), state: { job } }}><h1 className="font-medium text-indigo-600 truncate">Job Title: {job[JOB_TITLE]}</h1></Link>

                                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500">Created: {new Date(job[JOB_DATE_POSTED]).toDateString()}</p>
                                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500">Description: {job[JOB_DESCRIPTION]}</p>
                                            

                                                {sepratetags(job[JOB_TAGS])}

                                            
                                        </div>
                                        <div className="mt-2 flex">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />


                                            </div>
                                        </div>
                                    </div>


                                    <div className="ml-5 flex-shrink-0">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </a></Link>
                        </li>
                    ))
                ) : (
                    <span className={"h-full flex justify-center items-center"}>
                        {isLoading ? 'Loading...' : `There are no ${capitalize(tag)} jobs yet!`}
                    </span>
                )}

            </ul>
        </div >

    );
}

export default JobsList;