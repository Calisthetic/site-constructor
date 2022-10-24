import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";

export default function EditColor() {
  function EditColorOpen() {
    if (OpenEditors.color === true) {
      document.getElementById("EditColorDetect").style.opacity = "0";
      document.getElementById("EditColorDetect").style.height = "0px";
      OpenEditors.color = false;
    } else {
      document.getElementById("EditColorDetect").style.opacity = "1";
      document.getElementById("EditColorDetect").style.height = "auto";
      OpenEditors.color = true;
    }
  }

  const colorRef = useRef();
  const direction0Ref = useRef();
  const direction45Ref = useRef();
  const direction90Ref = useRef();
  const direction135Ref = useRef();
  const direction180Ref = useRef();
  const direction225Ref = useRef();
  const direction270Ref = useRef();
  const direction315Ref = useRef();
  const gradientCircleRef = useRef();
  const gradientColor1Ref = useRef();
  const gradientColor2Ref = useRef();

  function ChangeColor() {
    // document.getElementById("Block" + SelectedElem).style.background =
    //   colorRef.current.value;
    // if (type === "default") {
    // document.getElementById("Block" + SelectedElem).style.background =
    //   colorRef.current.value;
    // } else if (type === "radial") {
    //   document.getElementById("Block" + SelectedElem).style.background =
    //     "radial-gradient(" +
    //     gradientColor1Ref.current.value +
    //     " 0%, " +
    //     gradientColor2Ref.current.value +
    //     " 100%)";
    // } else {
    //   document.getElementById("Block" + SelectedElem).style.background =
    //     "linear-gradient(" +
    //     gradientDirection +
    //     "deg, " +
    //     gradientColor1Ref.current.value +
    //     " 0%, " +
    //     gradientColor2Ref.current.value +
    //     " 100%)";
    // }
  }
  let gradientDirection = 0;
  function ChangeGradientDirection(num) {
    gradientDirection = num;
    if (gradientDirection === -1) {
      ChangeColor("radial");
    } else {
      ChangeColor("linear");
    }
  }

  return (
    <div id="EditColor" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditColorOpen}>
        Цвет
      </div>
      <div id="EditColorDetect" className={s.detector}>
        <div className={s.container}>
          <div>Полная заливка</div>
          <input ref={colorRef} type="color" onChange={ChangeColor()}></input>
        </div>
        <div>Направление градиента</div>
        <div className={s.table_container}>
          <div className={s.table_column}>
            <div
              id="315"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(315)}
              ref={direction315Ref}
            >
              <div className={s.arrow_background}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="270"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(270)}
              ref={direction270Ref}
            >
              <div className={s.arrow_background315}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="225"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(225)}
              ref={direction225Ref}
            >
              <div className={s.arrow_background270}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
          <div className={s.table_column}>
            <div
              id="0"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(0)}
              ref={direction0Ref}
            >
              <div className={s.arrow_background45}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="gradientCircle"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(-1)}
              ref={gradientCircleRef}
            >
              <div className={s.circle_background}></div>
            </div>
            <div
              id="180"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(180)}
              ref={direction180Ref}
            >
              <div className={s.arrow_background225}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
          <div className={s.table_column}>
            <div
              id="45"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(45)}
              ref={direction45Ref}
            >
              <div className={s.arrow_background90}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="90"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(90)}
              ref={direction90Ref}
            >
              <div className={s.arrow_background135}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="135"
              className={s.edit_direction}
              onClick={ChangeGradientDirection(135)}
              ref={direction135Ref}
            >
              <div className={s.arrow_background180}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.container_gradient}>
          <div className={s.gradient_example}></div>
          <div className={s.edit_gradient}>
            <input
              type="color"
              defaultValue="#ffffff"
              ref={gradientColor1Ref}
              className={s.gradient_input}
              onChange={ChangeColor("linear")}
            ></input>
            <input
              type="color"
              defaultValue="#000000"
              ref={gradientColor2Ref}
              className={s.gradient_input}
              onChange={ChangeColor("linear")}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
