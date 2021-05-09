type MetaLayoutType = 'basic' | 'list';
export interface MetaPostProps {
  meta: {
    title: string;
    description: string;
    image?:string;
    // layout: MetaLayoutType
  };
}

type CodeLanguageType = 'language-jsx' | 'language-js' | 'language-css'
export interface CodeTemplateProps {
  children: string;
  className: CodeLanguageType;
}
