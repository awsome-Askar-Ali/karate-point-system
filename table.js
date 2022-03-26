function add() {
     var p1, p2, p3, p4, p5, p6, multi, akka, total, final;
     var p1T, p2T, p3T, p4T, p5T, p6T, facorT, acc, totalT;
     p1 = Number(document.getElementById("point1").value);
     p2 = Number(document.getElementById("point2").value);
     p3 = Number(document.getElementById("point3").value);
     p4 = Number(document.getElementById("point4").value);
     p5 = Number(document.getElementById("point5").value);
     p6 = Number(document.getElementById("point6").value);

     p1T = Number(document.getElementById("point1T").value);
     p2T = Number(document.getElementById("point2T").value);
     p3T = Number(document.getElementById("point3T").value);
     p4T = Number(document.getElementById("point4T").value);
     p5T = Number(document.getElementById("point5T").value);
     p6T = Number(document.getElementById("point6T").value);

     total = [p1, p2, p3, p4, p5, p6];
     total.sort(function (a, b) {
          return a - b;
     });
     akka = total[2] + total[3];
     multi = akka * 0.7;
     totalT = [p1T, p2T, p3T, p4T, p5T, p6T];
     totalT.sort(function (a, b) {
          return a - b;
     });
     acc = totalT[2] + totalT[3];
     facorT = acc * 0.3;
     final = multi + facorT;
     document.getElementById("total").value = parseFloat(final).toFixed(2);
}
const table = () => {
     return (
          <div>
               <form id="Input" className="TableAkka">
                    <h2>Akka</h2>
                    <h3 id="Akka">Athlete_Performance</h3>
                    <input
                         id="point1"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 1"
                    />
                    <input
                         id="point2"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 2"
                    />
                    <input
                         id="point3"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 3"
                    />
                    <input
                         id="point4"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 4"
                    />
                    <input
                         id="point5"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 5"
                    />
                    <input
                         id="point6"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 6"
                    />
                    <h3 id="Akka">Technical_Performance</h3>
                    <input
                         id="point1T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 1"
                    />
                    <input
                         id="point2T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 2"
                    />
                    <input
                         id="point3T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 3"
                    />
                    <input
                         id="point4T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 4"
                    />
                    <input
                         id="point5T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10.0"
                         placeholder="Point 5"
                    />
                    <input
                         id="point6T"
                         type="number"
                         min="5.5"
                         step="any"
                         max="10"
                         placeholder="Point 6"
                    />
                    <button form="TableAkka" onClick={add}>
                         Submit
                    </button>
                    <button onclick="document.getElementById('Input').value = ''">
                         Clear
                    </button>
                    <input
                         onClick={add}
                         autoComplete="off"
                         id="total"
                         type="total"
                         placeholder="Total"
                    ></input>{" "}
               </form>
          </div>
     );
};

export default table;
