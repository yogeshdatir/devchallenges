import { useEffect, useState } from "react";
import { countryDetails } from "../components/pages/QuizPage";

export default function useQuiz(url: string) {
  const [countriesData, setCountriesData] = useState<countryDetails[] | null>(null);
  const typesOfQuestion: string[] = ['capital', 'flag']

  // Fetch the data here
  useEffect(() => {
    fetch(url)
      .then((res: any) => res.json())
      .then((res: any) => setCountriesData(res));
  }, [url]);
  
  const getRandomNumber = (max:number, min:number) => {
    // max is not inclusive in the range because we are using floor func
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getRandomIndices = (
    countriesData: countryDetails[] | null
  ) => {
    if (countriesData) {
      let uniqueIndex:number = -1;
      let prevIndex: number[] = [];
      let count:number = 0;
      let setOfCountries: countryDetails[] = [];
      while (count < 4) {
        uniqueIndex = getRandomNumber(0, countriesData.length);
        const unique: countryDetails =
          countriesData[uniqueIndex];
        if (!prevIndex.includes(uniqueIndex)) {
          prevIndex.push(uniqueIndex);
          setOfCountries.push(unique);
          count++;
        }
      }
      return (setOfCountries);
    }
  };
  const setOfCountries: countryDetails[] | null = getRandomIndices(countriesData) || null;
  const answerCountry: countryDetails | null =
    (setOfCountries && setOfCountries[getRandomNumber(0, 4)]) || null;
  const questionType: string = typesOfQuestion[getRandomNumber(0,2)]

  return { setOfCountries, answerCountry, questionType };
}
