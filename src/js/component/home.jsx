import React, { useState, useEffect } from "react";




//create your first component
const Home = () => {

	const [number, setNumber] = useState(10)
	const [number2, setNumber2] = useState(5)
	const [number3, setNumber3] = useState(8)
	

	/* VARIABLE DE HOOK */
	const [color, setColor] = useState(false)
	const [color2, setColor2] = useState(false)
	const [color3, setColor3] = useState(false)
 
	/* COLORS */
	const colorSelect = () => {
		setColor(!color)
	}

	const colorSelect2 = () => {
		SetColor2(!color2)
	}

	const colorSelect3 = () => {
		setColor3(!color3)
	}

	

	if(number == -1){
		setColor(false)
		setNumber(10)
		setColor2(true)
	}

	if(number2 == -1){
		setColor2(false)
		setNumber2(5)
		setColor3(true)
	}

	if(number3 == -1){
		setColor3(false)
		setNumber3(8)
		setColor(true)
	}

	/* USE EFFECT */
	useEffect(() => {
		let interval = 0
		if (color || color2 || color3) {
		  interval = setInterval(() => {
			color ? setNumber(number - 1) : setNumber(10)
			color2 ? setNumber2(number2 - 1) : setNumber2(5)
			color3 ? setNumber3(number3 - 1) : setNumber3(8)
		  }, 1000)
		} else if (!color) {
		  clearInterval(interval)
		}

		
	
		return () => clearInterval(interval)
	  }, [color, color2, color3, number, number2, number3])

	return (
		<div>
			<h1 className="text-center mt-5">SEMAFORO</h1>
			<button onClick={colorSelect}>{color ? 'Pausar' : 'Iniciar'}{number}</button>

			<div className="d-flex justify-content-center">
			<div className="bg-dark rounded p-5 d-flex flex-column justify-content-center" style={{maxWidth: '300px'}}>
				<div 
				className={`border display-1 text-center mb-3 rounded bg-${color ? 'danger' : 'light'}`} 
				href="#" 
				/* onMouseOver={colorSelect} 
				onMouseLeave={colorSelect}  */
				style={{width: '200px', 
				height: '200px', 
				borderRadius: '50%', 
				boxShadow: `${color ? '0 0 50px rgb(255, 34, 0)' : ''}`
				}}>{number}</div>



				<div 
				className={`border display-1 text-center mb-3 rounded bg-${color2 ? 'warning' : 'light'}`} 
				href="#" 
				/* onMouseOver={colorSelect2} 
				onMouseLeave={colorSelect2}  */
				style={{width: '200px', 
				height: '200px', 
				borderRadius: '50%',
				boxShadow: `${color2 ? '0 0 50px yellow' : ''}`
				}}>{number2}</div>



				<div 
				className={`border display-1 text-center rounded bg-${color3 ? 'success' : 'light'}`} 
				href="#" 
				/* onMouseOver={colorSelect3} 
				onMouseLeave={colorSelect3}  */
				style={{width: '200px', 
				height: '200px', 
				borderRadius: '50%',
				boxShadow: `${color3 ? '0 0 50px rgb(0, 255, 38)' : ''}`
				}}>{number3}</div>
			</div>
			</div>
		</div>
	);
};

export default Home;
