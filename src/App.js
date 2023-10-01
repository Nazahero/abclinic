import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BrowserMain from "./browser/views/Main";
import MobileMain from "./mobile/views/Main";
import { Pub } from "./browser/views/content/Pub";
import { PubMobile } from "./mobile/views/content/Pub";
import axios from "./api/api";
import { usePackage } from "./hooks/usePackage";
import { useEffect, useState } from "react";




function App(props) {

    const langPath = [
        "ru",
        "en",
        "uz",
    ];
    const {info, setInfo} = usePackage();
    const [categories , setCategories] = useState([]);
    const [publications, setPublications] = useState([]);
    const Mob_Routes = [];
    const Browser_Routes = [];

    useEffect(() => {
        async function getCategories() {
            try {
                const {data} = await axios.get("/v1/blogs");
                return data;
            } catch (err) {
                alert(err);
            }
        }
        getCategories().then(async (categories)=>{
            try {
                const publications = {};
                const authors = (await axios.get(`/v1/authors`)).data;

                for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];
                    const {data} = await axios.get(`/v1/blogs/${category?.guid}/publication`);
                    publications[category?.guid] = data;
                }
                info["authors"] = authors;
                setInfo(info);
                setPublications(publications);
                setCategories(categories);
            } catch (err) {
                console.log(err);
            }            
        })
    }, [])

    for (let i = 0; i < categories?.length; i++) {
        const categoryPath = categories[i]?.guid;
        let BrowserPublicationPack = "";
        let MobilePublicationPack = "";
        if (publications) {
            if (publications[categories[i].guid]) {
                BrowserPublicationPack = <Pub pubs={publications[categoryPath]} />;
                MobilePublicationPack = <PubMobile pubs={publications[categoryPath]} />;
            }
        }        
        for (let k = 0; k < langPath.length; k++) {
            const path = langPath[k];
            if (path == "") {
                Mob_Routes.push(<Route path={"/" + categoryPath} element={<MobileMain blog={MobilePublicationPack} categories={categories} pack={props.ru} />} />);
                continue;
            }
            Mob_Routes.push(<Route path={"/" + path + "/" + categoryPath} element={<MobileMain blog={MobilePublicationPack} categories={categories} pack={props[path]} />} />);
        }

        for (let k = 0; k < langPath.length; k++) {
            const path = langPath[k];
            if (path == "") {
                Browser_Routes.push(<Route path={"/" + categoryPath} element={<BrowserMain blog={BrowserPublicationPack} categories={categories} pack={props.ru} />} />);
                continue;
            }
            Browser_Routes.push(<Route path={"/" + path + "/" + categoryPath} element={<BrowserMain blog={BrowserPublicationPack} categories={categories} pack={props[path]} />} />);
        }
    }


    return (
        <BrowserRouter>

            <MobileView>
          
                <Routes>
                    <Route path="/" element={<MobileMain categories={categories} pack={props.ru} />} />
                    <Route path="/ru/" element={<MobileMain categories={categories} pack={props.ru} />} />
                    <Route path="/en/" element={<MobileMain categories={categories} pack={props.en} />} />
                    <Route path="/uz/" element={<MobileMain categories={categories} pack={props.uz} />} />
                    {Mob_Routes}
                </Routes> 
      
            </MobileView>

            <BrowserView>
   
                <Routes>
                    <Route path="/" element={<BrowserMain categories={categories} pack={props.ru} />} />
                    <Route path="/ru/" element={<BrowserMain categories={categories} pack={props.ru} />} />
                    <Route path="/en/" element={<BrowserMain categories={categories} pack={props.en} />} />
                    <Route path="/uz/" element={<BrowserMain categories={categories} pack={props.uz} />} />
                    {Browser_Routes}                    

                </Routes>
              
              
            </BrowserView>

        </BrowserRouter>
    );
  
} 

export default App;
 