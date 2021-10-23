import { useState, useEffect } from "react";
import { getAllCompaniesInAlphabetic } from "../lib/database/dbCompanies";

const Companies = () => {
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

    return (
        <div>
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-50"}>
                <header
                    className={
                        "flex justify-between items-center px-4 h-16 bg-gray-900"
                    }
                >
                    <span
                        className={
                            "text-2xl sm:text-4xl text-white border-b font-sans"
                        }
                    >
                        Web 3.0 Companies
                    </span>
                </header>
                <div
                    className={"flex flex-col flex-grow p-4"}
                    style={{ height: "calc(100vh - 11.5rem)" }}
                >
                    <div
                        className={`p-2 border flex-grow grid gap-2 ${companies.length ? "auto-rows-min" : ""
                            } grid-cols-1 h-2/3 overflow-y-scroll first:mt-8`}
                    >
                        {companies.length ? (
                            companies.map(company => (
                                <h1 key={company.companyId}>Company Name: {company.companyName}</h1>
                            ))
                        ) : (
                            <span
                                className={
                                    "h-full flex justify-center items-center"
                                }
                            >
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

export default Companies;