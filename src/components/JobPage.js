import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const JobPage = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState();

    const {
        params: { jId, jTitle },
      } = match;

    useEffect(() => {
    }, []);

    return (
        <>
            <h1>Job Title:{`${jTitle}`}</h1>
            <Link to="/web3-jobs">Back to All Jobs</Link>
        </>
    );
};

export default JobPage;
