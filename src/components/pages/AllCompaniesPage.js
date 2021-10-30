import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import { getAllCompaniesInAlphabetic } from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANIES_PAGE_SUBTITLE,
    COMPANIES_PAGE_TITLE
} from "@constants/";
import { makeFriendlyUrl } from "@util/sanitize";

const AllCompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCompanies().catch(console.error);
    }, []);

    const fetchCompanies = async () => {
        let { data: companies, error } = await getAllCompaniesInAlphabetic();
        if (error) setError(error);
        else {
            setCompanies(companies)
            setIsLoading(false);
        };
    };

    // function that will destructure the company object
    const generateLinkURL = company => {
        const { [COMPANY_NAME]: cName } = company;
        return `${COMPANIES_URL}/${makeFriendlyUrl(cName)}`
    }

    const getContent = () => {
        return (
            <div className="bg-gray-dark shadow-2xl overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {companies.length ? (
                        companies.map(company => (
                            <li key={company[COMPANY_ID]}>

                                <Link to={{ pathname: generateLinkURL(company), state: { company } }} className="text-white block hover:bg-gray-light px-8 py-2">
                                    <div className="px-4 py-4 flex items-center sm:px-6">
                                        <span className="inline-block relative">
                                            <img
                                                className="inline-block h-12 w-12 rounded-md"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
                                        </span>
                                        <div className="flex-1 pl-8 flex items-center justify-between">
                                            <div className="overflow-ellipsis overflow-hidden">
                                                <Link to={{ pathname: generateLinkURL(company), state: { company } }}>
                                                    <h1 className="font-medium text-2xl text-indigo-600 hover:text-red-500 truncate">{company[COMPANY_NAME]}</h1></Link>
                                                <p className="ml-1 flex-shrink-0 font-normal text-gray-500 overflow-ellipsis overflow-hidden">{company[COMPANY_DESCRIPTION]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <span className={"h-full flex justify-center items-center"} >
                            {isLoading ? 'Loading...' : 'No companies! 👀'}
                        </span>
                    )}
                    {!!errorText && (
                        <div
                            className={
                                "border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"
                            }
                        >
                            {errorText}
                        </div>
                    )}
                </ul>
            </div>
        )
    }

    return (
        PageContainer(getContent(), COMPANIES_PAGE_TITLE, COMPANIES_PAGE_SUBTITLE)
    );
}

export default AllCompaniesPage;