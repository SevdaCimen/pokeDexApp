import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
export const useAPI = (host = "YDHOST") => {
  // const YDHOST = 'https://app.app4ps.com/api/';
  const YDHOST = "http://192.168.1.135:6010/api/";

  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Host: "192.168.1.135:6010",
  };
  let baseUrl = YDHOST;

  const customFetch = async ({
    endpoint,
    method = "GET",
    body = {},
    headers = defaultHeader,
    responseType,
  }) => {
    let url =
      host === "YDHOST" ? `${baseUrl}${endpoint}` : `${baseUrl}/${endpoint}`;

    var options = {
      method,
      headers,
    };

    var cToken = await AsyncStorage.getItem("JWT");
    var cookieToken = JSON.parse(cToken);
    var checkUrl = false;
    if (url.includes("new-user") || url.includes("login")) var checkUrl = true;

    var headerWithCookie = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Host: "192.168.1.135:6010",
      JWT: cookieToken,
    };
    if (!checkUrl) options.headers = headerWithCookie;

    if (url.includes("send-password-reset-code-for-mobile"))
      options.headers = defaultHeader;

    if (Object.keys(body).length) options.data = body;
    // if (Object.keys(body).length) options.data = JSON.stringify(body);
    if (responseType) options.responseType = responseType;
    try {
      var response = await axios(url, options);
      // console.log(
      //   '%c' + JSON.stringify(response),
      //   'background: #0000e5; color: #fff; font-size:16px',
      // );
      return response;
    } catch (error) {
      console.log(error, url, "api error");
    }
  };
  const get = async ({ endpoint, id, query }) => {
    const url = `${endpoint}${
      id ? `/${id}${query ? `?${query}` : ""}` : `${query ? `?${query}` : ""}`
    }`;
    return await customFetch({ endpoint: url });
  };

  const post = async ({ endpoint, body = {}, mavimasa }) => {
    return await customFetch({ endpoint, method: "POST", body });
  };

  const put = (endpoint, id, body = {}, token) => {
    if (!id && !body)
      throw new Error("to make a put you must provide the id and the   body");
    const url = `${endpoint}${id ? `/${id}` : ""}`;
    return customFetch({
      endpoint: url,
      method: "PUT",
      body,
      headers: defaultHeader,
    });
  };

  const del = (endpoint, id) => {
    const url = `${endpoint}/${id}`;

    return customFetch({ endpoint: url, method: "DELETE" });
  };
  return {
    get,
    post,
    put,
    del,
  };
};
