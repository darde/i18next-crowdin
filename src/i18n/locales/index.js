import pt from './default.json';
import en from './default.en.json';
import homePt from '../../components/Home/locales/default.json';
import homeEn from '../../components/Home/locales/default.en.json';
import augustinePt from '../../components/lighthouses/Augustine/locales/default.json';
import augustineEn from '../../components/lighthouses/Augustine/locales/default.en.json';
import herculesPt from '../../components/lighthouses/Hercules/locales/default.json';
import herculesEn from '../../components/lighthouses/Hercules/locales/default.en.json';
import lindauPt from '../../components/lighthouses/Lindau/locales/default.json';
import lindauEn from '../../components/lighthouses/Lindau/locales/default.en.json';
import peggysPt from '../../components/lighthouses/Peggys/locales/default.json';
import peggysEn from '../../components/lighthouses/Peggys/locales/default.en.json';

pt.home = homePt;
pt.lighthouses.augustine = augustinePt;
pt.lighthouses.hercules = herculesPt;
pt.lighthouses.lindau = lindauPt;
pt.lighthouses.peggys = peggysPt;
en.home = homeEn;
en.lighthouses.augustine = augustineEn;
en.lighthouses.hercules = herculesEn;
en.lighthouses.lindau = lindauEn;
en.lighthouses.peggys = peggysEn;

export {
  pt,
  en,
};
