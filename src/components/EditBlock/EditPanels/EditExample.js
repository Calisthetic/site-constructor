import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";s



const Edit = () => {
  function EditOpen() {
  if (OpenEditors. === true) {
    document.getElementById("EditDetect").style.opacity = "0";
    document.getElementById("EditDetect").style.height = "0px";
    OpenEditors. = false;
  } else {
    document.getElementById("EditDetect").style.opacity = "1";
    document.getElementById("EditDetect").style.height = "auto";
    OpenEditors. = true;
  }
}
  
  
  return (
    <div id="Edit" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditOpen}>
        Текст
      </div>
      <div id="EditDetect" className={s.detector}>
        <div className={s.title}>Текст</div>
        <div className={s.container}>
          <input
            type="range"
            min="1"
            max="512"
            className={s.range}
          ></input>
          <input
            type="text"
            maxLength="4"
            className={s.text}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Edit;
