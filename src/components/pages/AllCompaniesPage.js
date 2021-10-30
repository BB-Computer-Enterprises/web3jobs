import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import {
    getAllCompaniesInAlphabetic,
    getFeaturedCompanies
} from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANIES_PAGE_SUBTITLE,
    COMPANIES_PAGE_TITLE,
    COMPANY_FEATURED
} from "@constants/";
import { makeFriendlyUrl } from "@util/sanitize";
import { loading } from "@util/loading";

const AllCompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCompanies().catch(console.error);
    }, []);

    const fetchCompanies = async () => {
        let { data: companies, error } = await getAllCompaniesInAlphabetic();
        let { data: featuredCompanies, featuredError } = await getFeaturedCompanies();
        if (error || featuredError) setError(error || featuredError);
        else {
            setFeaturedCompanies(featuredCompanies)
            setCompanies(companies)
            setIsLoading(false);
        };
    };

    // function that will destructure the company object
    const generateLinkURL = company => {
        const { [COMPANY_NAME]: cName } = company;
        return `${COMPANIES_URL}/${makeFriendlyUrl(cName)}`
    }

    const featuredStyle = "bg-featured text-yellow"
    const regularStyle = "text-indigo-600 text-white"

    const genCompanies = companyData => {
        return (
            companyData.length ? (
                companyData.map(company => (
                    <li key={company[COMPANY_ID]} className={`${company[COMPANY_FEATURED] ? featuredStyle : regularStyle} border-b-2 border-white transform transition duration-500 hover:scale-105 hover:text-red-500 hover:bg-red-800 bg-opacity-95`}>
                        <Link to={{ pathname: generateLinkURL(company), state: { company } }} className=" block  px-8 py-2">
                            <div className="px-4 py-4 flex items-center sm:px-6">
                                <span className="inline-block relative">
                                    <img
                                        className="inline-block h-12 w-12 rounded-md"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className={`${company[COMPANY_FEATURED] ? "animate-ping" : ""} absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400`} />
                                </span>
                                <div className="flex-1 pl-8 flex items-center justify-between">
                                    <div className="overflow-ellipsis overflow-hidden">
                                        <Link to={{ pathname: generateLinkURL(company), state: { company } }}>
                                            <h1 className="font-medium text-2xl  truncate">{company[COMPANY_NAME]}</h1></Link>
                                        <p className="text-white ml-1 flex-shrink-0 font-normal overflow-ellipsis overflow-hidden">{company[COMPANY_DESCRIPTION]}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))
            ) : (
                <span className={"h-full flex justify-center items-center"} >
                    {isLoading ? loading() : 'No companies! 👀'}
                </span>
            )
        )
    }

const getContent = () => {
    return (
        <div className="bg-gray-dark shadow-2xl overflow-hidden sm:rounded-md">
            {genCompanies(featuredCompanies)}
            {genCompanies(companies)}
            {!!errorText && (
                <div
                    className={
                        "border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"
                    }
                >
                    {errorText}
                </div>
            )}
        </div>
    )
}

return (
    PageContainer(getContent(), COMPANIES_PAGE_TITLE, COMPANIES_PAGE_SUBTITLE)
);
}

export default AllCompaniesPage;