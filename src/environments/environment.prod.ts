export const environment = {
  production: false,
  socketIoConfig: {
    url: 'localhost:3000',
    options: {}
  },
  baseUrl: 'https://elortechnologies.com/biblelessons/ccc/',
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
  createBibleLesson:"biblelessons/create",
  getBibleLessonsList:'biblelessons/getBibleLessonsList',
  deleteLesson:'biblelessons/',
  updateBibleLesson:"biblelessons/",

  sundaySchoolLessons:{
    createNewSundaySchoolLesson:"SSC/saveNewSSCLesson",
    getSundaySchoolLessonForAMonth:"SSC/getSundaySchoolLessonForAMonth",
    deleteSundaySchoolLesson:"SSC/deleteSundaySchoolLesson/",
  }

};
