import page from "../css.module.css";
import custom from "../custom.module.css";

function CssModule() {
  return (
    <div>
        <h1 className={page.main}>css Module</h1>
        <h2 className={custom.main}>Custom Css</h2>
    </div>
  )
}

export default CssModule