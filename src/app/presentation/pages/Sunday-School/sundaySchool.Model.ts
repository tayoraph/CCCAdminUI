export interface SundaySchoolWeekDetails {
 weekname: string,
 weeknumber: number
 weekText: string
}





export interface sundaySchoolLessonRequest {
  SubTheme: string,
    Theme: string,
    Week: weekDetails,
    reqDetails: createSundaschoolAddtionalrequestDetails
    unit:string
}

export interface createSundaschoolAddtionalrequestDetails {
        year: string,
        month: string,
    }

export interface weekDetails   {
    Topic: string,
    Date: string,
    Duration: string,
    BibleReading: Array<string>,
    Focus: string,
    Notes: string,
    MemoryVerse: string
    week : string
  }

  
export interface getSscUnitByMonthReqParameters{

    month: string,
    unit: string,
    year: string
}