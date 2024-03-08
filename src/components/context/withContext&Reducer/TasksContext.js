import { createContext ,useReducer} from "react";
const TaskContext=createContext(null);
const TaskDispatch=createContext(null);

useReducer(taskDispatch)