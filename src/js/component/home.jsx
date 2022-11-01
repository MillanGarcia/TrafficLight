// import { json } from "node:stream/consumers";
import React, { useState,useEffect } from "react";
import TrafficLight from "./TrafficLight.jsx";
import Purple from "./purple.jsx";
//create your first component
const Home = () => {
    const [opened,setOpened]=useState(true);
    const [isPlaying,setIsPlaying]=useState(false);
    const [isPlaying1,setIsPlaying1]=useState(false);
    const [valor1,setValor1]=useState(3);
    const [index, setIndex] = useState(0);
    const defaultColors = {red: "gray", yellow: "gray", green:"gray", purple:"gray"}
    const [colors, setColors] = useState(defaultColors);
    const switchRed = (newColor) => {
        const color = colors[newColor] == newColor ? "gray" : newColor ;
        const aux = {...colors};
        aux[newColor] = color;
        setColors(aux);
    };
    
    
    
    const onSetPlay = () => {
        console.log(">>> isPlaying: ", isPlaying)
        setIsPlaying(!isPlaying)
        setIsPlaying1(false)
    }

    const _foo = () => {
        const aux = {...defaultColors};
        if (index === 0) {
            aux["red"] = "red";
        } else if (index === 1) {
            aux["yellow"] = "yellow";
        } else if (index === 2) {
            aux["green"] = "green";
        } else if (index === 3 ) {
            aux["purple"] = "purple";
        }
        setColors(aux)
        opened===false? setValor1(2) : setValor1(3);
        const newIndex = (index + 1 > valor1) ? 0 : index + 1
        setIndex(newIndex)
    }

    const onSetPlay1=()=>{
        setIsPlaying1(!isPlaying1)
        setIsPlaying(false)
    }

    const random=()=>{
        const numero=Math.floor(Math.random()*4)
        
        const aux = {...defaultColors};
        if (index === 0) {
            aux["red"] = "red";
        } else if (index === 1) {
            aux["yellow"] = "yellow";
        } else if (index === 2) {
            aux["green"] = "green";
        } else if (index === 3 ) {
            aux["purple"] = "purple";
        }
        setColors(aux)
        setIndex(numero)
        console.log(index)
    };

    

    
    useEffect(() => {
        console.log("AQWUIIIIIIIIIIIIIIIIII")
        if(isPlaying1){
            const t1= setInterval(random,1000)
            return ()=>{
                clearInterval(t1)
            }
        }
        if (isPlaying) {
            const t = setInterval(_foo, 1000)
            return () => {
                // console.log(">> hola"+t+index)
                // console.log(opened)
                clearInterval(t)
            }
        }
    }, [index, isPlaying,isPlaying1])
    /*const [purple, setPurple] = useState({purple:"black"});
    const switchPurple = (newColor1) => {
        const color1 = purple[newColor1] == newColor1 ? "black" : newColor1 ;
        const aux1 = {...purple};
        aux1[newColor1] = color1;
        setPurple(aux1);
    };*/
    
    /*si escribo la funcion en onClick={Change()} de esta forma, se llama todo el rato dos veces, porque? */
    return (
        <div className="bg-danger">
            <div className="d-block">
                <div className="TrafficTop" style={{backgroundColor:"black",width:"40px",height:"100px",margin:"auto"}}></div>
                <div className="container d-flex flex-column " style={{backgroundColor:"black",width:"200px",height:"330px",margin:"auto"}}>
                    <div className="w-50 h-50 rounded-circle me-auto ms-auto mt-2 " onClick={()=>switchRed("red")} style={{backgroundColor: colors["red"]}} ></div>
                    <div className="w-50 h-50 rounded-circle  me-auto ms-auto mt-2" onClick={()=>switchRed("yellow")} style={{backgroundColor: colors["yellow"]}}></div>
                    <div className="w-50 h-50 rounded-circle  me-auto ms-auto mt-2 " onClick={()=>switchRed("green")} style={{backgroundColor: colors["green"]}}></div>
                    {opened? (<Purple  color2={colors["purple"]}/>): ""}
                </div>
                <button type="button" className="btn btn-primary m-1" onClick={onSetPlay1} >{ isPlaying1 ? "Detener" : "Alternar colores" }</button>
                <button type="button" className="btn btn-primary" onClick={() => setOpened(true)}>Añade el morado al semáforo</button>
                <button type="button" className="btn btn-primary" onClick={() => setOpened(false)}>Retira el morado al semáforo</button>
                <button type="button" className="btn btn-primary" onClick={onSetPlay}>{ isPlaying ? "Pause" : "Play" }</button>
            </div>
        </div>
    );
};
export default Home;
