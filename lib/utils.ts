import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const minDate = new Date('1990-01-01');  // ! this is the minDate to be changed if our database minDate of manifesto changes


// ****************************************************** //
// * To check if the given date is in our date rang     * //
// *                                                    * //
// *                                                    * //
// *                                                    * //
// ****************************************************** //

function dateRangeChecker(dateString: string): boolean {
  const givenDate = new Date(dateString);
  const today = new Date();  // ! This is the max date and it will always remain same i.e till today
  return givenDate >= minDate && givenDate <= today;
}

export {minDate,cn, dateRangeChecker}
