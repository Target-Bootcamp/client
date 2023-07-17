import { Route, Routes } from "react-router-dom";
import Aviad from "./Aviad";
import Shay from "./Shay";
import Zvi from "./Zvi";
import Moyshi from "./Moyshi";
import Eli from "./Eli";
import Yonatan from "./Yonatan";
import Avraham from "./Avraham";
import Sagi from "./Sagi";
import Efraim from "./Efraim";
import Asher from "./Asher";
import Elad from "./Elad";
import Amram from "./Amram";
import Itamar from "./Itamar";
import Inon from "./Inon";
import Yosef from "./Yosef";

export default function MainTest() {
  return (
    <Routes>
      <Route path="/aviad" element={<Aviad />} />
      <Route path="/shay" element={<Shay />} />
      <Route path="/zvi" element={<Zvi />} />
      <Route path="/moyshi" element={<Moyshi />} />
      <Route path="/eli" element={<Eli />} />
      <Route path="/yonatan" element={<Yonatan />} />
      <Route path="/avraham" element={<Avraham />} />
      <Route path="/sagi" element={<Sagi />} />
      <Route path="/efraim" element={<Efraim />} />
      <Route path="/asher" element={<Asher />} />
      <Route path="/elad" element={<Elad />} />
      <Route path="/amram" element={<Amram />} />
      <Route path="/itamar" element={<Itamar />} />
      <Route path="/inon" element={<Inon />} />
      <Route path="/yosef" element={<Yosef />} />
    </Routes>
  );
}
