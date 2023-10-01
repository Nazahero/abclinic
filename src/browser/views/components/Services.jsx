import { useEffect, useState } from "react";
import axios from "../../../api/api"
import { usePackage } from "../../../hooks/usePackage";


function Li(props) {
    return (
        <li>{props.text}</li>
    )
}

function ServiceBlock(props) {
    let list = [];

    for (let i = 0; i < props.list.length; i++) {
        const element = props.list[i];
        list.push(<Li key={i} text={element} />);
    }

    return (
        <div className="service">
            <div className="title">
                {props.title}
            </div>
            <span className="line_x"></span>
            <ul className="list">
                {list}
            </ul>
        </div>
    )
}

function Line(props) {
    return (
        <div className="line">
            <div className="l_service">{props.service}</div>
            <span>............................................................................................................................................................................................................................................................................................................................................................................</span>

            <div className="price">{props.price}</div>
            {
                props.urgent == 0 ? "" : <div className="urgent price">{props.urgent}</div> 
            }
            

        </div>

    )
}

function Part(props) {
    return (
        <div className="part">
            <div className="t_title">{props.title}</div>
            <div className="bar">
                <div>Название</div>
                <div>Срочно</div>
            </div>
            {props.services}
        </div>
    )
}

const Services = () => {
    const { info } = usePackage();
    const pack = info?.package;
    const [priceListPack, setPriceList] = useState([]);
    const [priceGroups, setGroups] = useState([]);
    const currency = pack?.currency;
    const serviceBlocks = [];
    const priceList = [];
    const services = [];
    const unique = { key: 1 }


    useEffect(() => {
        async function fetchGroups() {
            try {
                const { data } = await axios.get("/v1/services/groups")
                return data;
            } catch (err) {

            }
        }
        async function fetchServices() {
            try {
                const titles = [];
                const priceList = [];
                await fetchGroups().then(async (groups) => {
                    for (let i = 0; i < groups.length; i++) {
                        const group = groups[i];
                        const { data } = await axios.get("/v1/services/" + group.guid);
                        titles.push(group.name);
                        priceList.push(data)
                    }
                });
                return { titles, priceList };
            } catch (err) {
                console.log(err);
            }
        }

        fetchServices().then((obj) => {
            setPriceList(obj.priceList);
            setGroups(obj.titles);
        })
    }, [])

    for (let i = 0; i < priceListPack.length; i++) {
        const element = priceListPack[i];
        services[i] = [];
        for (let k = 0; k < element.length; k++) {
            const obj = element[k];
            services[i].push(<Line key={unique.key++} service={obj["name"]} price={obj["price"]} urgent={obj["urgent_price"]} currency={currency} />)
        }
    }

    for (let i = 0; i < services.length; i++) {
        const serv = services[i];
        const el_title = priceGroups[i];

        priceList.push(<Part key={unique.key++} title={el_title} services={serv} />);
    }

    for (let i = 0; i < pack?.services.length; i++) {
        const element = pack?.services[i];
        serviceBlocks.push(<ServiceBlock key={unique.key++} title={element.title} list={element.serviceList} />);
    }

    return (
        <div className="services" id="3">
            <div className="shadow"></div>

            <div className="services_block">
                {serviceBlocks[0]}
                {serviceBlocks[1]}
                {serviceBlocks[2]}
            </div>
            <div className="priceList_table">
                <div className="open">Price list</div>
                {priceList}
            </div>

        </div>
    )
}

export default Services;
