function createCompanyObject(name, num){
    return{
        url: `www.${name}${num}.com`,
        email: `${name}@${num}.com`,
        companyName: `${name}-${num}`,
        description: `${name} Description!`,
        applicationURL: `www.${name}${num}.com/applyHere`,
        companyId: genNum()
    }
}

function genNum(){
    return Math.floor(Math.random() * 100) + 1
}

function createRandomWord(length) {
    var consonants = 'bcdfghjlmnpqrstv',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random()*limit);
        },
        i, word='', length = parseInt(length,10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }
    return word;
}

export const sampleCompanies = () => {
    let companies = [];

    for( let i = 0; i < 20; i++ ){
        companies[i] = createCompanyObject(createRandomWord(5), i);
    }

    return companies;
}