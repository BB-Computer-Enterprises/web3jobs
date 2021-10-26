import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCompaniesInAlphabetic } from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME
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

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div>
                <header className={"flex justify-between items-center px-4 h-16 bg-gray-900"}>
                    <span className={"text-2xl sm:text-4xl text-white border-b font-sans"} >
                        Web 3.0 Companies
                    </span>
                </header>
                <div
                    className={"flex flex-col flex-grow p-4"}
                    style={{ height: "calc(100vh - 11.5rem)" }}
                >
                    <div className={`p-2 border flex-grow grid gap-2 ${companies.length ? "auto-rows-min" : ""} grid-cols-1 h-2/3 overflow-y-scroll first:mt-8`} >
                        {companies.length ? (
                            companies.map(company => (
                                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6" key={company[COMPANY_ID]} >
                                    <Link to={{ pathname: generateLinkURL(company), state: { company }}}>
                                        <h1 className="text-lg leading-6 font-medium text-gray-900">Company Name: {company[COMPANY_NAME]}</h1>
                                    </Link>

                                    <p className="mt-1 text-sm text-gray-500">Description: {company[COMPANY_DESCRIPTION]}</p>
                                </div>
                            ))
                        ) : (
                            <span className={"h-full flex justify-center items-center"} >
                                {isLoading ? 'Loading...' : 'No companies! 👀'}
                            </span>
                        )}
                    </div>
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
            </div>
        </div>
    );
}

export default AllCompaniesPage;