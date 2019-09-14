/* const getHeader = () =>
  new Promise(async (resolve, reject) => {
    try {
      const userToken = await AsyncStorage.getItem(USER_TOKEN);

      return resolve({
        // "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      });
    } catch (error) {
      return reject(error);
    }
  }); */
const HOST = "https://nut-case.s3.amazonaws.com";
const fetchUrl = (path, config) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(`${HOST}/${path}`, config, progress =>
        console.log("progress: ", progress)
      );

      if (response.status < 500) {
        response = await response.json();

        return resolve(response);
      }

      return resolve(response);
    } catch (error) {
      return reject(error);
    }
  });

export const getJobListing = () =>
  fetchUrl("jobs.json", { method: "GET", mode: "cors" });
