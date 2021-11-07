
import { Link } from "react-router-dom";
import { makeFriendlyUrl } from "@util/sanitize";
import { daysElapsed } from "@util/daysElapsed";
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
    REGULAR_STYLE,
    FEATURED_TEXT_STYLE,
    REGULAR_TEXT_STYLE,
    REFER_URL
} from "@constants/";
import { genListIcon, genFooterLink, genTagsUrl } from "@util/";

// function that will destructure the job object
// it pulls out the title, id and company name to be used in the URL
const generateLinkURL = job => {
    const { [JOB_TITLE]: title, [JOB_ID]: id, companies: { [COMPANY_NAME]: cName } } = job;
    return `${JOBS_URL}/${makeFriendlyUrl(title)}-${makeFriendlyUrl(cName)}/${id}`
}

const sepratetags = (tags, isFeatured) => {
    const style = `${isFeatured ? "bg-gray-dark text-white hover:bg-white hover:text-black" : "bg-indigo-100 text-indigo-800 hover:bg-gray-lightest hover:text-white "} flex-1 items-center px-3 py-0.5 rounded-full text-sm font-medium `
    const onlyFourTags = tags.slice(0, 4);
    return onlyFourTags.map(tag => (
        <span className={style}>
            {genFooterLink(tag, genTagsUrl(tag))}
        </span>
    ))
}

const getCompany = job => {
    const { companies } = job;
    return companies;
}

const genUrlWithRefer = job => {
    return `${job.jApplicationUrl}${REFER_URL}`;
}

const correctDaysString = data => {
    const days = daysElapsed(data);
    if( days <= 1 ) return 'Today!'

    const plural = (days === 1) ? 'day' : 'days'
    return `${days} ${plural} ago`
}

const JobsList = ({ jobs }) => {
    return (
        jobs.map(job => {
            const company = getCompany(job);

            return (
                <Link key={job[JOB_ID]} to={{ pathname: generateLinkURL(job), state: { job } }} className={`${company[COMPANY_FEATURED] ? FEATURED_STYLE : REGULAR_STYLE}`}>
                    <div className="py-4 flex items-center">
                        {genListIcon(company[COMPANY_ICON_URL], "", company[COMPANY_FEATURED])}
                        <div className="flex-1 pl-8 flex items-center justify-between">
                            <div>
                                <h1 className={`${company[COMPANY_FEATURED] ? FEATURED_TEXT_STYLE : REGULAR_TEXT_STYLE}`}>{job[JOB_TITLE]}</h1>
                                <p className="mb-1 flex-shrink-0 font-normal text-white font-medium">{company[COMPANY_NAME]}</p>
                                <p className="flex-shrink-0 font-normal text-white ">📅 Posted {correctDaysString(job[JOB_DATE_POSTED])}</p>
                            </div>
                            <div className="inline-flex space-x-2 hidden lg:block">
                                {sepratetags(job[JOB_TAGS], company[COMPANY_FEATURED])}
                            </div>
                            <a href={genUrlWithRefer(job)}>
                                <button
                                    className={`${!company[COMPANY_FEATURED] ? "bg-gray-light hover:bg-white hover:text-black" : "hover:bg-indigo-100 hover:text-black border"} items-center px-6 py-3 font-medium rounded-md shadow-2xl text-white bg-indigo-600 hidden md:block lg:block`}
                                >
                                    Apply
                                </button>
                            </a>
                        </div>
                    </div >
                </Link >
            )
        }
        )
    )
}

export default JobsList;