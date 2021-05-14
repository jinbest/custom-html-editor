import React from "react";

import Editor, { Value } from '@react-page/editor';

import { cellPlugins } from './plugins/cellPlugins';

export default function SimpleExample() {
  const [value, setValue] = React.useState<Value>({} as Value);

  React.useEffect(() => {
    const CustomEditor = document.getElementById("custom-editor") as HTMLDivElement
    console.log(CustomEditor, value)
  }, [value])

  return (
    <div id="custom-editor">
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  )
};