import pt from './default.json';
import en from './default.en.json';
import es from './default.es.json';
import homePt from '../../components/Home/locales/default.json';
import homeEn from '../../components/Home/locales/default.en.json';
import homeEs from '../../components/Home/locales/default.es.json';
import augustinePt from '../../components/lighthouses/Augustine/locales/default.json';
import augustineEn from '../../components/lighthouses/Augustine/locales/default.en.json';
import augustineEs from '../../components/lighthouses/Augustine/locales/default.es.json';
import peggysPt from '../../components/lighthouses/Peggys/locales/default.json';
import peggysEn from '../../components/lighthouses/Peggys/locales/default.en.json';
import peggysEs from '../../components/lighthouses/Peggys/locales/default.es.json';

pt.home = homePt;
pt.lighthouses.augustine = augustinePt;
pt.lighthouses.peggys = peggysPt;
en.home = homeEn;
en.lighthouses.augustine = augustineEn;
en.lighthouses.peggys = peggysEn;
es.home = homeEs;
es.lighthouses.augustine = augustineEs;
es.lighthouses.peggys = peggysEs;

export {
  pt,
  en,
  es,
};
