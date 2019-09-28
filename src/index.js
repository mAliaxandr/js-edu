/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
      preferences,
      knowsProgramming,
      config
    ) {
      let result;
      let hours;

      if ( knowsProgramming === true) {
        hours = 800;
      } else {
        hours = 1300;
      }

      result = Math.ceil( hours / config[preferences]) ;
      return result;
  };
  