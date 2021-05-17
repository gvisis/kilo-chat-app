// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const apiOperations = (apiUrl, headers) => {
//   const [result, setResult] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setErorr] = useState(null);

//   // API Settings
//   const apiKey = "$2b$10$zsQeFc4HAPaWVNwcqq1M3eCNVtIzBNNQ4tybT4HRbzs8iP9dJoLpO";
//   const defaultApiUrl =
//     "https://api.jsonbin.io/b/60a1559f3656981d5122283b/latest";

//   const defaultHeaders = {
//     "Content-Type": "application/json",
//     "secret-key": apiKey,
//     versioning: "false",
//   };

//   useEffect(() => {
//     axios
//       .get(apiUrl, {
//         headers: headers,
//       })
//       .then((response) => {
//         if (response.status !== 200) {
//           throw Error("Could not fetch the data for that resource");
//         }
//         setIsPending(false);
//         setErorr(null);
//         setResult(response.data);
//       })
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("fetch aborted");
//         } else {
//           setIsPending(false);
//           setErorr(error.message);
//         }
//       });
//   }, [apiUrl]);
//   return { result, isPending, error };
// };

// export default apiOperations;

// // // Getting the data
// // const fetchData = async (apiUrl = defaultApiUrl, headers = defaultHeaders) => {
// //   await axios
// //     .get(apiUrl, {
// //       headers: headers,
// //     })
// //     .then((response) => {
// //       if (response.status !== 200) {
// //         throw Error("Could not send the data for that resource");
// //       }
// //       return response.data;
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });
// // };

// // const postData = async (apiUrl = defaultApiUrl, data, headers = defaultHeaders) => {
// //   if (data === undefined || data !== null) {
// //     return "Canno";
// //   }
// //   await axios
// //     .put(apiUrl, data, {
// //       headers: headers,
// //     })
// //     .then((response) => {
// //       if (response.status !== 200) {
// //         throw Error("Could not send the data for that resource");
// //       }
// //     })
// //     .catch((error) => {
// //       console.log(error.message);
// //     });
// // };

// // export { fetchData, postData };
