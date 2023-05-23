import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VacanciesStore from "./store/Vacancies";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);

root.render(
    <Context.Provider value={{
        vacancy: new VacanciesStore(),
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);