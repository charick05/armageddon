'use client';

import { createContext, useContext, useState, Dispatch } from "react";

interface StateMyAppContext {
   astItem: Asteroids[];
   setAstItem: Dispatch<React.SetStateAction<Asteroids[]>>
   distanceSelect: string
   setDistanceSelect: Dispatch<React.SetStateAction<string>>
}

const MyAppContext = createContext<StateMyAppContext>({} as StateMyAppContext);

export const MyAppContextProvider = ({children}: {children: React.ReactNode}) => {
   const [astItem, setAstItem] = useState<Asteroids[]>([]);
   const [distanceSelect, setDistanceSelect] = useState<string>('km');
   return(
      <MyAppContext.Provider value={
            {
               astItem,
               setAstItem,
               distanceSelect,
               setDistanceSelect
            }
         }>
         {children}
      </MyAppContext.Provider>
   )
};

export const useMyAppContext = () => useContext(MyAppContext);