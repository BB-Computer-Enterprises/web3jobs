// function to remove spaces and periods from the name passed in
// replaces it with a hypen
// ie abc 123.com -> abc-123-com
export const makeFriendlyUrl = name => name.toLowerCase().replace(/ /g, '-').replace(/\./g, '-');