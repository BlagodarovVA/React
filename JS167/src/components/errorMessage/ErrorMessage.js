import img from './error3.gif';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}} 
        src={img} alt={"Error loading character"}/>
    );
}

export default ErrorMessage;