import React from "react";
import img1 from "./image/img0_1.png";
import Comp02_tsk05 from "./tsk05-comp02";
import Comp03_tsk05 from "./tsk05-comp03";
import "./App.css";
export default function Comp01_Tsk05() {
  return (
    <div className="section">
      <div className="section_1">
        <div className="img_div1">
          <img src={img1} alt="" />
        </div>
        <div>
          <h2>Console</h2>
        </div>
        <div className="para_div1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          dolorem sequi deserunt fugit deleniti, veniam corporis excepturi
          obcaecati accusamus saepe nihil tenetur nam molestias nobis. pariatur
        </div>
        <div>
          <button className="bt_1">
            <b>Go Anywhere</b>
          </button>
        </div>
      </div>
      
        <Comp02_tsk05 />
      
      
        <Comp03_tsk05 />
      
    </div>
  );
}
