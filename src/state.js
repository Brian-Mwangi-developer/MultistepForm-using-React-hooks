import { createContext, useContext, useState} from "react";
//the createcontext is used to provide value that can be used by components.
export const AppStateContext =createContext({});
// the app provider handles the appstate
export function AppProvider({ children}) {
    const value = useState({});
    return (
        //the Appstatecontext receives from the Appprovider function through the value variable
        <AppStateContext.Provider value ={value}>
            {children}
        </AppStateContext.Provider>
    );
}
//this function is used to read the values of the Appstate context using the usecontext keyword
//any component with the context attribute can read the value of Appstate
//looks complicated :| but is easy once you understand the logic :) 
export function useAppState(){
    const context = useContext(AppStateContext);
    if(!context) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return context;
}
