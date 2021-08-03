import Loader from "react-loader-spinner";

import "../styles/styles.css";

function LoaderSpinner() {
    return (
        <div className="loader">
            <Loader type="BallTriangle" color="#00BFFF" height={200} width={200}/>
        </div>
    )
}

export default LoaderSpinner;