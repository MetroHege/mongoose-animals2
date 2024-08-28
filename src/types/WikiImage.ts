type WikiImage = {
  batchcomplete: boolean;
  query: Query;
};

type Thumbnail = {
  source: string;
  width: number;
  height: number;
};

type Page = {
  pageid: number;
  ns: number;
  title: string;
  thumbnail: Thumbnail;
  pageimage: string;
};

type Normalized = {
  fromencoded: boolean;
  from: string;
  to: string;
};

type Query = {
  normalized: Normalized[];
  pages: Page[];
};

export default WikiImage;
