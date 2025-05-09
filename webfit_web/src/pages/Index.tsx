import React from "react";
import CenterView from "../layouts/CenterView";
import Overlay from "../components/overlay";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

function Index(): React.ReactElement {

  const navigate = useNavigate();

  const onMoveSelectFrame = () => {
    navigate("/selectframe", {
      replace: true
    });
  }

  return (
    <CenterView>
      <Button onClick={onMoveSelectFrame} className="bg-[#537D5D] text-[#FFFFFF] text-2xl font-bold px-15 py-7">Webfit 시작하기</Button>
      <Overlay/>
    </CenterView>
  );
}

export default Index;
