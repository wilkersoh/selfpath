export const LineNo = ({ children }) => (
  <div className='pl-2 pr-4  pointer-events-none opacity-50 inline-block'>
    {children}
  </div>
);

interface PreProps {
  children: any;
  className: string;
  style?: object;
  language: string;
}

const LanguageTag = ({ language }) => (
  <div className='absolute top-0 -right-3 px-6 py-2 z-10 code-template-bg shadow-md rounded-t-lg text-gray-50 font-bold'>
    <span className='tracking-wider'>{language}</span>
  </div>
);

export const Pre = ({ children, className, style, language }: PreProps) => {
  return (
    <div className={`relative mt-3 pt-4`}>
      <LanguageTag language={language} />
      <div
        className={`relative overflow-scroll mt-6 mb-8 pt-10 pb-4 -mx-6 px-4 code-template-bg ${className}`}
        style={style}>
        {children}
      </div>
    </div>
  );
};