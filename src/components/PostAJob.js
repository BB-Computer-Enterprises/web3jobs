import { useState, useEffect } from "react";
import { Formik } from 'formik';
import { supabase } from "../lib/api";
import { isLocal } from "../util/local";

const PostAJob = () => {
    // const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");

    // useEffect(() => {
    //     fetchJobs().catch(console.error);
    // }, []);

    // const fetchJobs = async () => {
    //     let { data: jobs, error } = isLocal ? sampleJobs() :
    //         await supabase
    //             .from("jobs")
    //             .select("*")
    //             .order("id", { ascending: false });

    //     if (error) setError(error);
    //     else setJobs(jobs);
    // };

    const postAJobForm = () => (
        <div>
            <h1>Post a Job Form</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );

    return (
        <div>
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-500"}>
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
                        Post A Job
                    </span>
                </header>
                <div
                    className={"flex flex-col flex-grow p-4"}
                    style={{ height: "calc(100vh - 11.5rem)" }}
                >
                    <div>
                        {postAJobForm()}
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

export default PostAJob;