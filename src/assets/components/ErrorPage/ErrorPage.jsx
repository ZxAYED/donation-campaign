import { useRouteError } from "react-router-dom";
import warn from "../../logo/warn.png"
export default function ErrorPage() {
  const error = useRouteError();


  return (
    <div className=" " id="error-page">
      <div className="flex justify-center items-center gap-5 h-[90vh] flex-col">
<img src={warn} alt="" />
<h1 className="font-bold text-3xl text-center "> Oops! <br />
      Sorry, an unexpected error has occurred.</h1> </div>
     
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}