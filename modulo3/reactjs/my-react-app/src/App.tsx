/*import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import PromedioForm from './components/PromedioTresNotasForm';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SumaForm from './components/SumaForm';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser';

function App() {
  return (
    <>
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter/>
      <TextInput/>
      <ToggleMessage/>
      <ShowDate/>
      <ColorBox/>
      <ConditionalText/>
      <EmojiList/>
      <SimpleForm/>
      <SumaForm/>
      <PromedioForm/>
    </>
  );
}

export default App;*/


/*import PromedioForm from "./components/PromedioTresNotasForm";
import Greeting from "./props/Greeting";
import UserCard from "./props/UserCard";


function App() {
const userData = { name: "Carlos", age: 30, apellido: "Fernandez", direccion: "Quito", telefono: "0989765665"  };
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <PromedioForm/>
      <UserCard user={userData}/>
    </>
  );
}

export default App; */

/*import ParentButtonOne from "./props/ParentButtonOne";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import ParentLoginForm from "./props/ParentLoginForm";
import ParentUserList from "./props/ParentUserList";

function App(){
  return (
    <>
      <ParentButtonOne/>
      <ParentIncrementButton/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
    </>
  )
}
export default App; */

/*import HoverFont from "./useState/HoverFont";
import AccessWithLimit from "./useState/AccessWithLimit";
import LoginWithLimit from "./useState/LoginWithLimit";
import DocumentTitleChanger from "./useState/DocumentTitleChanger";
import PostLikes from "./useState/PostLikes";
import CheckboxSummary from "./useState/CheckboxSummary";
import LanguageSwitcher from "./useState/LanguageSwitcher";
import MultiSwitch from "./useState/MultiSwitch";

function App(){
  return (
    <>
      /*<HoverFont/>
      <AccessWithLimit/>
      <LoginWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
    </>
  )
}
export default App; */

/*import ClickHistory from "./useState/ClickHistory";
import DynamicColor from "./useState/DynamicColor";
function App(){
  return (
    <>
      <DynamicColor/>
      <ClickHistory/>
      
    </>
  )
}
export default App; */

/*import PersistCounter from "./useEffect/PersistCounter";

function App(){
  return (
    <>
      <PersistCounter/>
    </>
  )
}
export default App; */

import React, { useState } from 'react';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}



