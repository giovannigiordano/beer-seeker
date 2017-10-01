import { ABV_ASC, ABV_DESC, IBU_ASC, IBU_DESC, NAME_ASC, NAME_DESC } from '../constants';

export const sortItems = (items, sort) => {
  switch (sort) {
    case NAME_ASC:
      return items
        .sort((a, b) => {
          var nameA = a.name.trim().toUpperCase();
          var nameB = b.name.trim().toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
        .map(el => el);
    case NAME_DESC:
      return items
        .sort((a, b) => {
          var nameA = a.name.trim().toUpperCase();
          var nameB = b.name.trim().toUpperCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        })
        .map(el => el);
    case ABV_ASC:
      return items
        .sort((a, b) => {
          return Number(a.abv) - Number(b.abv);
        })
        .map(el => el);
    case ABV_DESC:
      return items
        .sort((a, b) => {
          return Number(b.abv) - Number(a.abv);
        })
        .map(el => el);
    case IBU_ASC:
      return items
        .sort((a, b) => {
          return Number(a.ibu) - Number(b.ibu);
        })
        .map(el => el);
    case IBU_DESC:
      return items
        .sort((a, b) => {
          return Number(b.ibu) - Number(a.ibu);
        })
        .map(el => el);
    default:
      return items;
  }
};
