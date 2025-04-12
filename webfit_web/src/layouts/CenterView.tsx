import React from "react";

type CenterViewProps =  {
  children?: React.ReactNode | undefined;
}

function CenterView({children}: CenterViewProps): React.ReactElement {
  return (
    <div className="flex justify-center items-center size-full">
      {children}
    </div>
  )
}

export default CenterView