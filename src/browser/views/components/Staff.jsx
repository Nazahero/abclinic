import { useEffect, useState } from "react";
import { usePackage } from "../../../hooks/usePackage";
import axios from "../../../api/api";


function Letter(props) {
    return (
        <span className="letter">{props.letter}</span>
    )
}
function Dentist(props) {
    let index = props.priority;
    if (!props.priority) {
        index = "main";
    }
    return (
        <div className={"dentist off prioriti_" + index + " _" + props.num + " " + props.side} id={"d_" + props.id} data-clone={props.clone}>
            <img src={props.img}  alt="" />                                
        </div>
    )
}
function Br(props) {
    return (
        <br />        
    )
}



function DentistInfo(props) {
    
    let text = [""];
    let found = 0;
    let information = [];

    for (let i = 0; i < props.info?.length; i++) {
        const element = props.info[i];
        let pre_text = text[text.length-1];
        if (element == "<") {
            found = 1;
            continue;
        } else if (found == 1 && element == "n") {
            text.push("");
            found = 0;
            continue;
        }
        found = 0;
        text[text.length-1] = pre_text + element;
    }

    for (let i = 0; i < text?.length; i++) {
        const element = text[i];
        information.push(element);
        information.push(<Br key={i} />);
    }

    if (props.side == "right") {
        return (
            <div className={"dentist_information i_"+ props.num +" t_left"}>
                <div className="dentist_name">{props.name}</div>
                <span></span>
                <div className="text">
                    <span>
                        {information}
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"dentist_information i_"+ props.num +" t_right"}>
                <div className="dentist_name">{props.name}</div>
                <span></span>
                <div className="text">
                    <span>
                        {information}
                    </span>
                </div>
            </div>
        )
    }
    
}

const Staff = () => {
    const {info} = usePackage();
    const pack = info?.package;
    const [dentistsPack, setDentists] = useState([]);
    const letters = [];
    const dentists = [];

    useEffect(()=>{
        async function fetchDentists() {
            try {
                const {data} = await axios.get("/v1/dentists");
                return data;
            } catch (err) {
                return 500;
            }
        }
        fetchDentists().then(function (dentists) {
            setDentists(dentists)        
        })
    }, [])

    const unique = {key: 1}

    for (let i = 0; i < pack?.letters?.length; i++) {
        const element = pack?.letters[i];
        letters.push(<Letter key={unique.key++} letter={element} />);
    }
    
    const order = [4,3,5,1,2,6,7]; 
    
    for (let i = 0; i < dentistsPack?.length; i++) {
        const el = dentistsPack[i];
        
        for (let i = 0; i < order.length; i++) {
            const index = order[i];

            if (Number(el.id) == index) {
                order[i] = el;
                break
            }
        }
    }


    for (let i = 0; i < order.length; i++) {
        const den_obj = order[i]
        if (! den_obj == Object) {
            break
        }
        dentists.push(<Dentist key={unique.key++} id={den_obj.id} clone={den_obj.cloneName} priority={den_obj.priority} num={i+1} side={den_obj.side} img={den_obj.img} />);
        dentists.push(<DentistInfo key={unique.key++} info={den_obj.info} name={den_obj.name} num={i+1} side={den_obj.side} />);
    }

    return (
        <div className="staff" id="2">
            <div className="next_button hidden"><img src="/img/next.png" alt="" /></div>
            <div className="prev_button hidden"><img src="/img/next.png" alt="" /></div>
            <div className="back_button"><img src="/img/back.png" className="clickable" alt="" /></div>
            <div className="shadow"></div>
            <div className="team">
                {letters}
            </div>
            {/* ------------------------------- */}
            <div className="fog _1 off">
                <img src="/img/fog.png" alt="fog" />
            </div>
            <div className="fog _2 off">
                <img src="/img/fog.png" alt="fog" />
            </div>
            <div className="fog _3 off">
                <img src="/img/fog.png" alt="fog" />
            </div> 
            {/* ------------------------------- */}
            
            {dentists}
                        
        </div>
    )
}

export default Staff;