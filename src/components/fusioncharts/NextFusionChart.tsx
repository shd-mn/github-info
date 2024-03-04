import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

import {
  languageConfigs,
  forkedReposConfigs,
  starsConfigs,
  starsPerLangConfigs,
} from "./data/configs";
import { sortData } from "@/utils/sortData";
import { findLanguageData } from "@/utils/findLanguageData";
import { RepoTypes } from "@/types/repoTypes";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

type PropTypes = {
  reposData: RepoTypes;
};

const NextFusionCharts = ({ reposData }: PropTypes) => {
  if (reposData) {
    let starsData = sortData(reposData, "stargazers_count");
    starsConfigs.dataSource.data = starsData;

    let forksData = sortData(reposData, "forks_count");
    forkedReposConfigs.dataSource.data = forksData;

    const langData = findLanguageData(reposData);
    languageConfigs.dataSource.data = langData;

    const starsPerLangData = findLanguageData(reposData, "stargazers_count");
    starsPerLangConfigs.dataSource.data = starsPerLangData;
  }

  return (
    <section>
      <div className="grid grid-cols-[2fr_3fr] gap-8">
        <ReactFC {...languageConfigs} />
        <ReactFC {...starsConfigs} />
        <ReactFC {...starsPerLangConfigs} />
        <ReactFC {...forkedReposConfigs} />
      </div>
    </section>
  );
};

export default NextFusionCharts;
