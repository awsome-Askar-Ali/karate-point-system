function Aoo() {
     var t1, t2, t3, t4, t5, t6, mult, add, tot, fin;
     var t1T, t2T, t3T, t4T, t5T, t6T, aoo, facor, total;
     t1 = Number(document.getElementById("tot1").value);
     t2 = Number(document.getElementById("tot2").value);
     t3 = Number(document.getElementById("tot3").value);
     t4 = Number(document.getElementById("tot4").value);
     t5 = Number(document.getElementById("tot5").value);
     t6 = Number(document.getElementById("tot6").value);

     t1T = Number(document.getElementById("point1AT").value);
     t2T = Number(document.getElementById("point2AT").value);
     t3T = Number(document.getElementById("point3AT").value);
     t4T = Number(document.getElementById("point4AT").value);
     t5T = Number(document.getElementById("point5AT").value);
     t6T = Number(document.getElementById("point6AT").value);

     tot = [t1, t2, t3, t4, t5, t6];
     tot.sort(function (a, b) {
          return a - b;
     });
     add = tot[2] + tot[3];
     mult = add * 0.7;

     total = [t1T, t2T, t3T, t4T, t5T, t6T];
     total.sort(function (a, b) {
          return a - b;
     });
     aoo = total[2] + total[3];
     facor = aoo * 0.3;
     fin = mult + facor;
     document.getElementById("totall").value = parseFloat(fin).toFixed(2);
}
const tableaoo = () => {
     return (
          <div>
               <form id="myInput" className="TableAoo">
                    <h2 id="Aoo">Aoo</h2>
                    <h3 id="Aoo">Athlete_Performance</h3>
                    <input
                         id="tot1"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 1"
                    />
                    <input
                         id="tot2"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 2"
                    />
                    <input
                         id="tot3"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 3"
                    />
                    <input
                         id="tot4"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 4"
                    />
                    <input
                         id="tot5"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 5"
                    />
                    <input
                         id="tot6"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 6"
                    />
                    <h3 id="Aoo">Technical_Performance</h3>
                    <input
                         id="point1AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 1"
                    />
                    <input
                         id="point2AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 2"
                    />
                    <input
                         id="point3AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 3"
                    />
                    <input
                         id="point4AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 4"
                    />
                    <input
                         id="point5AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 5"
                    />
                    <input
                         id="point6AT"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10"
                         placeholder="Point 6"
                    />
                    <button form="TableAoo" onClick={Aoo}>
                         Submit
                    </button>
                    <input
                         onClick={Aoo}
                         autoComplete="off"
                         id="totall"
                         type="total"
                         placeholder="Total"
                    ></input>{" "}
               </form>
          </div>
     );
};

export default tableaoo;
