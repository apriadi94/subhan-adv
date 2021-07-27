import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const HeaderComponent = () => {
    return(
        <div className="grid">
            <div className="mx-10 mt-5 md:mt-10">
                <h1 className="text-2xl md:text-4xl font-bold text-math hidden md:block md:text-center">My Resume</h1>
                
                <div className="flex justify-center mt-5 mb-5">
                    <button className="flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-math">
                        <FontAwesomeIcon icon={faFilePdf} color="white" className="h-5 w-6 mr-2"/>
                        Download My Resume In PDF
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default HeaderComponent