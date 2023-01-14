import React,{useState} from "react";

const Home = () => {

	const [activo,setActivo]= useState("opacity-25");
	
	const changeColor = () =>{
		

		if(activo == "opacity-25"){
			setActivo("opacity-100");
		}else {
			setActivo("opacity-25");
		}
	}

	return (
		<div className="semaforo">
			<div className={"btn btn-danger " + activo} onClick= {changeColor} >uno</div>
			<div className={"btn btn-warning "  + activo} onClick= {changeColor}>dos</div>
			<div className={"btn btn-success "  + activo} onClick= {changeColor}>tres</div>
		</div>
	);
};


export default Home;
