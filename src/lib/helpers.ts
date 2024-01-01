const Helpers = (() => {
  return {
    jsonParse: (json_string: string) => {
      try {
        return JSON.parse(json_string);
      } catch (err) {
        return false;
      }
    },
    formatDate: (date: string) => {
      const d = new Date(date),
        year = d.getFullYear();

      let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [day, month, year].join('.');
    },
  };
})();

export default Helpers;
