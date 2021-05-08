import React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LineNo, Pre } from "./elements/CodeTemplateElement";
import { CodeTemplateProps } from "./interfaces";

const CodeTemplate: React.FC<CodeTemplateProps> = ({ children, className }) => {
  const language: any = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} language={language}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeTemplate;
