// import { useEffect } from "react";
// import Prism from "prismjs";
// import "prismjs/components/prism-jsx"; // Language
// import "prismjs/themes/prism-okaidia.css"; // Theme
import { CodeWrapper, CodeBlockHeader, CodeBlockTab, CopyCodeButton, Code } from '../Styled/CodeBlock';

import {useState} from 'react'
import { MdOutlineContentCopy,MdDone } from "react-icons/md";


interface CodeBlockProps {
  language?: string;
  children: string;
}


const CodeBlock = ({ language, children }: CodeBlockProps) => {

    const [isCopied, setIsCopied] = useState<Boolean>(false)

  return (
    <CodeWrapper>
      <CodeBlockHeader>
            <div>
                <CodeBlockTab>Preview</CodeBlockTab>
                <CodeBlockTab>Code</CodeBlockTab>
            </div>
            <div>
                <CopyCodeButton onClick={() => {
                    navigator.clipboard.writeText(children)
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 1000)
                }} >{isCopied ? <MdDone/> : <MdOutlineContentCopy/>}</CopyCodeButton>
            </div>
      </CodeBlockHeader>

      <Code>
        <code>{children}</code>
      </Code>
    </CodeWrapper>
  );
};

export default CodeBlock;
