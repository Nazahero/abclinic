import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BrowserMain from "./browser/views/Main";
import MobileMain from "./mobile/views/Main";
import { Pub } from "./browser/views/content/Pub";
import { MobPub } from "./mobile/views/content/Pub";



function App(props) {
    console.log("pid");
    // var Browser_BeforeAfter = <Browser_BeAfterv />;
    // var Browser_MomentsComp = <Browser_moments />;
    // var Mobile_BeforeAfter = <Mobile_BeAfterv title="До/После" />
    // var Mobile_PhotosComp = <Mobile_Photos />

    const langPath = [
        "ru",
        "en",
        "uz",
    ];

    const categories = props.categories;
    const publications = props.publications;
    const Mob_Routes = [];
    const Browser_Routes = [];

    for (let i = 0; i < categories.length; i++) {
        const categoryPath = categories[i].path;
        let PublicationPack = "";
        if (publications[categories[i].guid]) {
            PublicationPack = <Pub pubs={publications[categories[i].guid]} />;
        }
        for (let k = 0; k < langPath.length; k++) {
            const path = langPath[k];
            if (path == "") {
                Mob_Routes.push(<Route path={"/" + categoryPath} element={<MobileMain blog={PublicationPack} pack={props.ru} />} />);
                continue;
            }
            Mob_Routes.push(<Route path={"/" + path + "/" + categoryPath} element={<MobileMain blog={PublicationPack} pack={props[path]} />} />);
        }

        for (let k = 0; k < langPath.length; k++) {
            const path = langPath[k];
            if (path == "") {
                Browser_Routes.push(<Route path={"/" + categoryPath} element={<BrowserMain blog={PublicationPack} pack={props.ru} />} />);
                continue;
            }
            Browser_Routes.push(<Route path={"/" + path + "/" + categoryPath} element={<BrowserMain blog={PublicationPack} pack={props[path]} />} />);
        }
    }
  
    return (
        <BrowserRouter>

            <MobileView>
          
                <Routes>
                    <Route path="/" element={<MobileMain pack={props.ru} />} />
                    <Route path="/ru/" element={<MobileMain pack={props.ru} />} />
                    <Route path="/en/" element={<MobileMain pack={props.en} />} />
                    <Route path="/uz/" element={<MobileMain pack={props.uz} />} />
                    {Mob_Routes}
                </Routes> 
      
            </MobileView>

            <BrowserView>
   
                <Routes>
                    <Route path="/" element={<BrowserMain pack={props.ru} />} />
                    <Route path="/ru/" element={<BrowserMain pack={props.ru} />} />
                    <Route path="/en/" element={<BrowserMain pack={props.en} />} />
                    <Route path="/uz/" element={<BrowserMain pack={props.uz} />} />
                    {Browser_Routes}                    
                </Routes>
              
            </BrowserView>

        </BrowserRouter>
    );
  
} 

export default App;
 