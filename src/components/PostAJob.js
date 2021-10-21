import { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { supabase } from "../lib/api";
import { isLocal } from "../util/local";

const PostAJob = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
        contactEmail: '',
        companyName: '',
        jobTitle: '',
        description: '',
        applicationURL: '',
    },
    validationSchema: Yup.object({
        contactEmail: Yup.string().email('Invalid email address').required('Required'),
        companyName: Yup.string().required('Company name Required'),
        jobTitle: Yup.string().required('Job title Required'),
        description: Yup.string().min(20, 'That\'s a pretty short description, dont you think 🤔?').required('Description Required'),
        applicationURL: Yup.string().required('Application URL Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // TODO: add validation for application email

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="contactEmail">Your Email</label>
      <input
        id="contactEmail"
        name="contactEmail"
        type="email"
        {...formik.getFieldProps('contactEmail')}
      />
      {formik.touched.contactEmail && formik.errors.contactEmail ? <div>{formik.errors.contactEmail}</div> : null}

      <label htmlFor="companyName">Company name</label>
      <input
        id="companyName"
        name="companyName"
        type="text"
        {...formik.getFieldProps('companyName')}
      />
      {formik.touched.companyName && formik.errors.companyName ? <div>{formik.errors.companyName}</div> : null}

      <label htmlFor="jobTitle">Job title</label>
      <input
        id="jobTitle"
        name="jobTitle"
        type="text"
        {...formik.getFieldProps('jobTitle')}
      />
      {formik.touched.jobTitle && formik.errors.jobTitle ? <div>{formik.errors.jobTitle}</div> : null}

      <label htmlFor="description">Job Description</label>
      <input
        id="description"
        name="description"
        type="text"
        {...formik.getFieldProps('description')}
      />
      {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}

      <label htmlFor="applicationURL">Apply URL (or email)</label>
      <input
        id="applicationURL"
        name="applicationURL"
        type="text"
        {...formik.getFieldProps('applicationURL')}
      />
      {formik.touched.applicationURL && formik.errors.applicationURL ? <div>{formik.errors.applicationURL}</div> : null}

      <button type="submit">Post your job</button>
    </form>
  );
};

// const PostAJob = () => {
//     // const [jobs, setJobs] = useState([]);
//     const [errorText, setError] = useState("");

//     // useEffect(() => {
//     //     fetchJobs().catch(console.error);
//     // }, []);

//     // const fetchJobs = async () => {
//     //     let { data: jobs, error } = isLocal ? sampleJobs() :
//     //         await supabase
//     //             .from("jobs")
//     //             .select("*")
//     //             .order("id", { ascending: false });

//     //     if (error) setError(error);
//     //     else setJobs(jobs);
//     // };

//     const postAJobForm = () => (
//         <div>
//             <h1>Post a Job Form</h1>
//             <Formik
//                 initialValues={{
//                     title,
//                     datePosted: '',
//                     location: '',
//                     description: '',
//                     tags: [],
//                     jobId: null,
//                     companyId: null,
//                 }}
//                 validate={values => {
//                     const errors = {};
//                     if (!values.email) {
//                         errors.email = 'Required';
//                     } else if (
//                         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                     ) {
//                         errors.email = 'Invalid email address';
//                     }
//                     return errors;
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                 }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                     /* and other goodies */
//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="email"
//                             name="email"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.email}
//                         />
//                         {errors.email && touched.email && errors.email}
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.password}
//                         />
//                         {errors.password && touched.password && errors.password}
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     );

//     return (
//         <div>
//             <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-500"}>
//                 <header
//                     className={
//                         "flex justify-between items-center px-4 h-16 bg-gray-900"
//                     }
//                 >
//                     <span
//                         className={
//                             "text-2xl sm:text-4xl text-white border-b font-sans"
//                         }
//                     >
//                         Post A Job
//                     </span>
//                 </header>
//                 <div
//                     className={"flex flex-col flex-grow p-4"}
//                     style={{ height: "calc(100vh - 11.5rem)" }}
//                 >
//                     <div>
//                         {postAJobForm()}
//                     </div>
//                     {!!errorText && (
//                         <div
//                             className={
//                                 "border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"
//                             }
//                         >
//                             {errorText}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

export default PostAJob;