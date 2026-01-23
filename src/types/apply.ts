export interface ApplyFormData {
  legalFirstName: string
  legalMiddleName: string
  legalLastName: string
  preferredFirstName: string
  email: string
  confirmEmail: string
  streetAddress: string
  city: string
  stateProvince: string
  zipCode: string
  country: string
  phone: string
  genderOnPassport: string
  dateOfBirth: string
  genderIdentity: string
  preferredPronouns: string
  countryOfCitizenship: string
  firstLanguage: string
  otherLanguages: string
  speakOtherLanguages: string
  validPassport: string
  currentlyStudent: string
  sscGPA: string
  sscMarksheet: File | null
  hscGPA: string
  hscMarksheet: File | null
  bscDegree: string
  bscGPA: string
  bscMarksheet: File | null
  mscDegree: string
  mscGPA: string
  mscMarksheet: File | null
  studyAbroadLocation: string
  studyAreas: string
  programDuration: string
  preferredStartMonth: string
  preferredStartYear: string
  specificProgram: string
  specificQuestions: string
  disabilitiesMedical: string
  consent: boolean
}

