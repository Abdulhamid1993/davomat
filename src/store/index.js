import { configureStore } from "@reduxjs/toolkit";
import bolajonlarSlice from "./bolajonlarSlice";
import TeacherSlice from "./teacherSlice";

const store = configureStore({
    reducer:{
        teacher:TeacherSlice,
        bolajon: bolajonlarSlice,
    }

})

export default store