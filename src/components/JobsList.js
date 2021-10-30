
import { Link } from "react-router-dom";
import { makeFriendlyUrl } from "@util/sanitize";
import {
    COMPANY_NAME,
    JOBS_URL,
    JOB_DATE_POSTED,
    JOB_ID,
    JOB_TITLE,
    JOB_TAGS,
    COMPANY_ICON_URL,
    COMPANY_FEATURED,
    FEATURED_STYLE,
    REGULAR_STYLE
} from "@constants/";
import { genListIcon } from "@util/genListIcon";

// function that will destructure the job object
// it pulls out the title, id and company name to be used in the URL
const generateLinkURL = job => {
    const { [JOB_TITLE]: title, [JOB_ID]: id, companies: { [COMPANY_NAME]: cName } } = job;
    return `${JOBS_URL}/${makeFriendlyUrl(title)}-${makeFriendlyUrl(cName)}/${id}`
}

const sepratetags = tags => {
    return tags.map(tag => (
        <span className="flex-1 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {tag}
        </span>
    ))
}

const getCompany = job => {
    const { companies } = job;
    return companies;
}

const JobsList = ({ jobs, isLoading, tag }) => {
    return (
        jobs.map(job => {
            const company = getCompany(job);
            
            return (
                <Link key={job[JOB_ID]} to={{ pathname: generateLinkURL(job), state: { job } }} className={`${company[COMPANY_FEATURED] ? FEATURED_STYLE : REGULAR_STYLE}`}>
                    <div className="px-4 py-4 flex items-center sm:px-6">
                        {genListIcon(company[COMPANY_ICON_URL], "", company[COMPANY_FEATURED])}
                        <div className="flex-1 pl-8 flex items-center justify-between">
                            <div>
                                <Link to={{ pathname: generateLinkURL(job), state: { job } }}><h1 className="font-medium text-xl hover:text-red-500 truncate">{job[JOB_TITLE]}</h1></Link>
                                <p className="ml-1 flex-shrink-0 font-normal text-gray-500 font-medium"> {company[COMPANY_NAME]}</p>
                                <p className="ml-1 flex-shrink-0 font-normal text-gray-500 ">📅 {new Date(job[JOB_DATE_POSTED]).toDateString()}</p>
                            </div>
                            <div className="inline-flex space-x-2 hidden lg:block">
                                {sepratetags(job[JOB_TAGS])}
                            </div>
                            <button
                                type="button"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden lg:block"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </Link>
            )
        }
        )
    )
}

export default JobsList;