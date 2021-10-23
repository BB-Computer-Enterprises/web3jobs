import { supabase } from "../api";
import { getAll } from './dbCommon';
import {getAllLinkedCompanies} from './dbJobs'
import {
    COMPANY_ID,
    COMPANY_NAME,
    COMPANY_TABLE,
    JOBS_TABLE
} from "../constants";

//*********COMPANIES SECTION

/**
 * function to get all the companies
 * @returns Array full of all company objects
 */
export const getAllCompanies = () => {
    return getAll(COMPANY_TABLE);
}

/**
 * function to get all the companies in alphabetic order: A-Z
 * @returns Array full of all company objects
 */
export const getAllCompaniesInAlphabetic = () => {
    return getAllCompanies().order(COMPANY_NAME, { ascending: true });
}

/**
 * 
 * @param {int} companyId 
 * @returns 
 */
export const getLinkedJobs = companyId => {
    return getAllLinkedCompanies().match({ [COMPANY_ID]: companyId });
}

//*********END OF COMPANIES SECTION