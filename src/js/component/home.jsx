import React,{useState} from "react";

const Home = () => {

	const [opacityRed,setOpacityRed]= useState("opacity-25");
	const [opacityYellow,setOpacityYellow]= useState("opacity-25");
	const [opacityGreen,setOpacityGreen]= useState("opacity-25");


	const colorRed = () =>{
		if(opacityRed === "opacity-25"){
			setOpacityRed("opacity-100")
			setOpacityYellow("opacity-25")
			setOpacityGreen("opacity-25")
		}else{
			setOpacityRed("opacity-25")
		}
	}

	const colorYellow = () =>{
		if(opacityYellow === "opacity-25"){
			setOpacityYellow("opacity-100")
			setOpacityRed("opacity-25")
			setOpacityGreen("opacity-25")
		}else{
			setOpacityYellow("opacity-25")
		}
	}

	const colorGreen = () =>{
		if(opacityGreen === "opacity-25"){
			setOpacityGreen("opacity-100")
			setOpacityYellow("opacity-25")
			setOpacityRed("opacity-25")
		}else{
			setOpacityGreen("opacity-25")
		}
	}


	return (
		<div className="semaforo">
			<div className={"btn btn-danger " + opacityRed}  onClick= {colorRed} ></div>
			<div className={"btn btn-warning " + opacityYellow} onClick= {colorYellow}></div>
			<div className={"btn btn-success " + opacityGreen} onClick= {colorGreen}></div>
		</div>
	);
};


export default Home;
