import React,{useState} from "react";

const Home = () => {

	const [red,setRed]= useState("opacity-25");
	const [yellow,setyellow]= useState("opacity-25");
	const [green,setGreen]= useState("opacity-25");

	
	
	const colorRed = () =>{
		if(opacityRed === "opacity-25"){
			setRed("opacity-100")
			setYellow("opacity-25")
			setGreen("opacity-25")
		}else{
			setRed("opacity-25")
		};
	const colorYellow = () =>{
		if(opacityYellow === "opacity-25"){
			setYellow("opacity-100")
			setRed("opacity-25")
			setGreen("opacity-25")
		}else{
				setYellow("opacity-25")
			}
	const colorYellow = () =>{
		if(opacityYellow === "opacity-25"){
				setYellow("opacity-100")
				setRed("opacity-25")
				setGreen("opacity-25")
	}else{
				setYellow("opacity-25")
}

	}

	return (
		<div className="semaforo">
			<div className={"btn btn-danger " + red}  onClick= {colorRed} >uno</div>
			<div className={"btn btn-warning "  + yellow} onClick= {colorYellow}>dos</div>
			<div className={"btn btn-success "  + green} onClick= {colorGreen}>tres</div>
		</div>
	);
};
}

export default Home;
