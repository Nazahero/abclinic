import { useState , useEffect } from "react";
import axios from "../../../api/api"
import { usePackage } from "../../../hooks/usePackage";


function Chapter(props) {
    return (
        <div className="chapter">
            <div className="chapter_title">{props.name}</div>
            {props.articles}
        </div>
    )
}

function Article(props) {
    return (
        props.img ?
        <div className={"article " + props.side}>
            <div className="atext">
                
                <div className="article_img"><img src={props.img} alt="Image" /></div>
                {props.text}
            </div>

        </div>
        :
        <div className={"article " + props.side}>
            <div className="atext">
                {props.text}
            </div>

        </div>
    )
}


const Info = () => {
    const { info } = usePackage();
    const pack = info?.package;
    const [chaptersPack, setChapters] = useState([]);
    const [articlesPack, setArticles] = useState([]);
    const chapters = [];
    const articles = [];

    useEffect(() => {
        async function fetchChapters () {
            try {
                const {data} = await axios.get("/v1/articles/chapter")
                return data;
            } catch (err) {
                
            }
        }
        async function fetchArticles () {
            try {
                const chapters = [];
                const articles = [];
                await fetchChapters().then(async (res) => {
                    for (let i = 0; i < res.length; i++) {
                        const chapter = res[i];
                        const {data} = await axios.get("/v1/articles/" + chapter.guid);
                        chapters.push(chapter.name);
                        articles.push(data)
                    }
                });
                return {chapters, articles};
            } catch (err) {
                console.log(err);
            }
        }

        fetchArticles().then((obj) => {
            setArticles(obj.articles);
            setChapters(obj.chapters);
        })
    }, []);


    for (let i = 0; i  < articlesPack.length; i++) {
        const art = articlesPack[i]   ;
        articles[i] = [];
        for (let f = 0; f < art.length; f++) {
            const obj = art[f];
            articles[i].push(<Article text={obj?.text} img={obj?.img} side={obj?.side} />);
        }
    }

    for (let i = 0; i < chaptersPack.length; i++) {
        const chapter = chaptersPack[i];
        const art = articles[i];
        chapters.push(<Chapter articles={art} name={chapter} />);
    }



    return (
        <div className="info page page_left" id="1">
            <div className="info_back">
                <img src="/img/info.jpg" alt="info"/>
                <div className="shadow"></div>
                <div className="back_title">
                    <div className="main_t">Welcome to abclinic.uz</div>
                </div>
            </div>
            <div className="information">
                {chapters}
            </div>
        </div>
    )
}

export default Info;