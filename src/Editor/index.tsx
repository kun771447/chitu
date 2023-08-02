import { memo } from "react";
import classNames from "classnames";

import { ComponentEditor, PropertyEditor, Renderer } from "./main";

export const Editor = memo(() => {
  return (
    <section className={classNames("h-[100vh] flex items-stretch justify-between")}>
      <ComponentEditor />
      <section className="flex-1 max-w-[500px] bg-[pink]">
        <Renderer />
      </section>
      <PropertyEditor />
    </section>
  );
});
