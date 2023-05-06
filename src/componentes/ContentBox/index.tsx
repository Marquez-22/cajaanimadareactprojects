import { useEffect } from "react"
import AOS from "aos"


type ContentBoxType = "ContentBox1"

interface ContentBoxProps {
    type?: ContentBoxType
    nbox?: number

}


export const ContentBox = ({ type = "ContentBox1", nbox = 10 }: ContentBoxProps) => {
    const ArrayBox = new Array(nbox).fill(1) //testarray=>nombre de la variable, new array =>funcion para crear un array de ncantidad vacia

    useEffect(() => {
        AOS.init({
            delay:500,
            duration:1000,
            
        });
    }, [])

    return (<>
        <div className={`ContentBox ${type}`}>
            <div className="top">
                <h1 className='text-center'>Welcome to  React Animation</h1>
                <h1>Scroll to see the animation</h1>


                {
                    ArrayBox.map((elemento, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    data-aos={`fade-${(index % 2 == 0) ? //%=> significa modulo en programacion, que se utiliza el signo de division /, de esta manera el modulo retorna el restante de la divison, es decir si un numero es impar, es producto del restante de la division en la cual dio 1 , si es par da el restante 0 , no solo se utiliza para obtener numeros pares,si no tambien para saber si un elemento es divisible entre el numero que se le coloca
                                            "left"
                                            :
                                            "right"

                                        }`}
                                >
                                    <div className="box">
                                        <h2>Content</h2>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }






            </div>






        </div>






    </>)
}