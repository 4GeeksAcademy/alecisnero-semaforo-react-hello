import React, { useState, useEffect } from "react";




//create your first component
const Home = () => {

	const [numberRed, setNumberRed] = useState('')
	const [numberYellow, setNumberYellow] = useState('')
	const [numberGreen, setNumberGreen] = useState('')



	/* VARIABLE DE HOOK */
	const [colorRed, setColorRed] = useState(false)
	const [colorYellow, setColorYellow] = useState(false)
	const [colorGreen, setColorGreen] = useState(false)
	const [colorPurple, setColorPurple] = useState(false)

	/* SELECT COLORS */
	const colorSelect = () => {
		setColorRed(!colorRed)
		setNumberRed(10)
	}

	const restart = () => {
		setNumberRed('')
		setNumberYellow('')
		setNumberGreen('')
		setColorRed(false)
		setColorYellow(false)
		setColorGreen(false)
	}


	/* CONDICIONES DE LOS ESTADOS */

	/* COLOR RED */

	if (numberRed == -1) {
		setColorRed(false)
		setColorYellow(true)
		setNumberYellow(3)
		setNumberRed('')
	}
 

	/* COLOR YELLOW */
	
	if (numberYellow == -1) {
		setColorYellow(false)
		setColorGreen(true)
		setNumberGreen(12)
		setNumberYellow('')
	}


	/* COLOR GREEN */
	
	if (numberGreen == -1) {
		setColorGreen(false)
		setColorRed(true)
		setNumberRed(10)
		setNumberGreen('')
	}

	/* USE EFFECT */
	useEffect(() => {
		let interval = 0
		if (colorRed || colorYellow || colorGreen) {
			interval = setInterval(() => {
				if(colorRed) {setNumberRed(numberRed - 1)} 
				if(colorYellow) {setNumberYellow(numberYellow - 1)} 
				if(colorGreen) {setNumberGreen(numberGreen - 1)} 
			}, 1000)
		} else {
			clearInterval(interval)
		}


		return () => clearInterval(interval)
	}, [colorRed, colorYellow, colorGreen, numberRed, numberYellow, numberGreen])

	return (
		<div className="container">
			<div className="row">
				<div className="col mt-3">
					<div className="d-flex justify-content-center">
						<h1 className="border rounded text-center mt-2 p-2" style={{ maxWidth: '350px', backgroundColor: '#eaeaea' }}>SEMAFORO</h1>
					</div>
					<div className="mt-5 p-3 text-center border rounded d-flex flex-column" style={{backgroundColor: '#eaeaea'}}>
						{/* BOTON DE INICIAR */}
						<button className={`mb-2 btn btn-${colorRed ? 'danger' : 'success'} text-center`} 
						onClick={colorSelect} 
						disabled={colorYellow || colorGreen ? true : false} >
							{colorRed ? 'Pausar en este color' : 'Iniciar'}
						</button>

						{/* BOTON DE REINICIAR */}
						<button className={`mb-2 btn btn-outline-success text-center`} onClick={restart}>Reiniciar</button>

						{/* BOTON DE ADD COLOR PURPLE */}
						<button className={`mb-2 btn text-center`} onClick={() => setColorPurple(!colorPurple)}
							style={{ backgroundColor: `${colorPurple ? '#a700a7' : '#f99ef9'}` }}
						>Add Color Purple</button>
					</div>
				</div>

				<div className="col mt-3">
					<div className="d-flex justify-content-center">
						<div className="bg-dark rounded p-5 d-flex flex-column justify-content-center" style={{ maxWidth: '300px', minHeight: '700px' }}>
							<div
								className='display-1 text-center mb-3 bg-danger d-flex align-items-center justify-content-center'
								/* onMouseOver={colorSelect} 
								onMouseLeave={colorSelect}  */
								style={{
									width: '200px',
									height: '200px',
									borderRadius: '50%',
									boxShadow: `${colorRed ? '0px 0px 100px 50px rgb(255, 34, 0)' : ''}`
								}}><div><p style={{ color: '#fc6666' }}>{numberRed}</p></div></div>



							<div
								className='display-1 text-center mb-3 bg-warning d-flex align-items-center justify-content-center'
								/* onMouseOver={colorSelect2} 
								onMouseLeave={colorSelect2}  */
								style={{
									width: '200px',
									height: '200px',
									borderRadius: '50%',
									boxShadow: `${colorYellow ? '0px 0px 100px 50px yellow' : ''}`
								}}><div><p style={{ color: '#f5f562' }}>{numberYellow}</p></div></div>



							<div
								className='display-1 text-center bg-success
						d-flex align-items-center justify-content-center'
								/* onMouseOver={colorSelect3} 
								onMouseLeave={colorSelect3}  */
								style={{
									width: '200px',
									height: '200px',
									borderRadius: '50%',
									boxShadow: `${colorGreen ? '0px 0px 100px 50px rgb(0, 255, 38)' : ''}`
								}}>
								<div><p style={{ color: '#31f548' }}>{numberGreen}</p></div>
							</div>

							{/* COLOR PURPLE */}
							{colorPurple && (
								<div
									className='display-1 text-center
					d-flex align-items-center justify-content-center mt-3'
									style={{
										width: '200px',
										height: '200px',
										backgroundColor: '#a700a7',
										borderRadius: '50%',
										boxShadow: `${colorPurple ? '0px 0px 100px 50px #a700a7' : ''}`
									}}>

								</div>
							)}
						</div>
					</div>
					{/* ESTO ES EL CUADRADO DE ABAJO */}
					<div className="d-flex justify-content-center">
						<div className="bg-dark rounded-bottom" style={{ width: '50px', height: '16vh' }}>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

