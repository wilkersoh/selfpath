type MetaLayoutType = 'basic' | 'list';

export interface MetaPostProps {
  meta: {
    title: string;
    description: string;
    image?:string;
    // layout: MetaLayoutType
  };
}
