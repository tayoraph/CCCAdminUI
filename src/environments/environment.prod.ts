export const environment = {
  production: false,
  socketIoConfig: { // <1>
    url: 'localhost:3000', // <2>
    options: {}
  },
  baseUrl: 'https://ccc-backend.adaptable.app/ccc/',
  appVersionDetails: "getAppVersion",
  getAllBibleLessons : "biblelessons",
  getTodaysBibleLessons : "biblelessons/today",
  getListOfLesson : "biblelessons/getListOfLesson",
  searchBibleLesson : "biblelessons/search",
  getBibleVerses : "biblebooks/search",
  getAllBibleBooks : "biblebooks/getAllBibleBooksByBibleVersion/",
  getAllBibleBooksAndTotalChapterPerBook:  "biblebooks/getAllBibleBooksAndTotalChapterPerBook/",
  getUnitsundaySchoolLessonDataForSelectedMonth:  "SSC/unit",
  getHymnsByhymnNo:"hymns/getHymnsByhymnNo",
  searchHymn: "hymns/search",
  getAppDetails:"getAppVersion",
  authentication:{
    login:"auth/login",
    register:""
  },
  excemptedUrlArray:["dap/getAllDap","dap/dapAudio"],
  getAllDap:"dap/getAllDap",

};
