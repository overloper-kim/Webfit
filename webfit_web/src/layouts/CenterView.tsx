import React from "react";

type CenterViewProps =  {
  children?: React.ReactNode | undefined;
}

function CenterView({children}: CenterViewProps): React.ReactElement {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div>
  )
}

export default CenterView