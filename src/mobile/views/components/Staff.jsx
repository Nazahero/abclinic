import { useEffect, useState } from "react";
import { usePackage } from "../../../hooks/usePackage";
import axios from "../../../api/api";


function Letter(props) {
    return (
        <span className="letter">{props.letter}</span>
    )
}
function Dentist(props) {
    let index = "";
    if (!props.priority) {
        index = "on";
    }
    return (
        <div className={"dentist " + index} id={"d_" + props.num} >
            <img src={props.img} alt="dentist" />
        </div>
    )
}
function Br() {
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
        let pre_text = text[text.length - 1];
        if (element == "<") {
            found = 1;
            continue;
        } else if (found == 1 && element == "n") {
            text.push("");
            found = 0;
            continue;
        }
        found = 0;
        text[text.length - 1] = pre_text + element;
    }

    for (let i = 0; i < text?.length; i++) {
        const element = text[i];
        information.push(element);
        information.push(<Br key={i} />);
    }

    return (
        <div className={"dentist_information " + props.period} data-information={"d_" + props.num}>
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

const Staff = (props) => {
    const { info } = usePackage();
    const pack = info?.package;
    const [dentistsPack, setDentists] = useState([]);
    const photos = [];
    const informations = [];

    useEffect(() => {
        async function fetchDentists() {
            try {
                const { data } = await axios.get("/v1/dentists");
                return data;
            } catch (err) {
                return 500;
            }
        }
        fetchDentists().then(function (dentists) {
            setDentists(dentists)
        })
    }, [])

    const unique = { key: 1 }

    const order = [4, 3, 5, 1, 2, 6, 7];

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
        if (!den_obj == Object) {
            break
        }
        console.log(den_obj);
        
        photos.push(<Dentist key={unique.key++} id={den_obj.id} clone={den_obj.cloneName} priority={den_obj.priority} num={i + 1} side={den_obj.side} img={den_obj.img} />);
        informations.push(<DentistInfo key={unique.key++} period={den_obj.priority ? "" : "period"} info={den_obj.info} name={den_obj.name} num={i + 1} />);
    }

    return (
        <div className="staff page" id="1">

            {/* ------------------------------- */}
            <div className="fog _1 off">
                <img src="/mobileImg/fog.png" alt="fog" />
            </div>
            <div className="fog _2 off">
                <img src="/mobileImg/fog.png" alt="fog" />
            </div>
            <div className="fog _3 off">
                <img src="/mobileImg/fog.png" alt="fog" />
            </div>
            {/* ------------------------------- */}
            <div className="dentists">
                <div className="next_button"><img src="/mobileImg/next.png" alt="" /></div>
                <div className="prev_button"><img src="/mobileImg/next.png" alt="" /></div>
                {informations}
                <div className="dentists_photos">
                    {photos}
                </div>
                <div className="background" id="b_staff">
                    <img src="/mobileImg/background.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Staff;