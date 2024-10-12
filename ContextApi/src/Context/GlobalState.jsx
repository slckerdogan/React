import { createContext,useState } from "react";

//createContext kullancağız dedik
export const GlobalContext = createContext();

//createContext kullanmak için bir tane provider oluşturduk ve bu sağlayıcı içerisinde göndereceğimiz değerler/propslar ile de sürekli props dönmek yerine,ihtiyacımız olan props neyse istediğimiz yerde onu kullanacağız
export const GlobalProvider = (props) => {
    const [deger,setDeger]=useState("Mahmut") //useState kullanarak name propsunu butonla değiştirmeye çalışıyoruz
    return <GlobalContext.Provider
        value={
            {
                name: deger,
                surname: "Doğan",
                setDeger,
            }
        }>
        {props.children}
    </GlobalContext.Provider>
};