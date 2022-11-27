import axios from "axios";

import { baseUrl, config } from "./Config";

const addTable = async (table) => {
  //peticion con valor desde body
  const res = await axios.post(baseUrl + "/Table", table, config);
  console.log(res);
  return res.data;
};

const getTable = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrl + "/Table", config);
  return res.data;
};

const getTableAvailability = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrl + "/Table", config);
  return res.data;
};

const editTable = async (table) => {
  //peticion con valor desde body
  const res = await axios.put(baseUrl + "/Table/" + table.id, table, config);
  console.log(res);
  return res.data;
};

const getTableid = async (table) => {
  //peticion con valor desde body
  const res = await axios.get(baseUrl + "/Table/" + table, config);
  console.log(res);
  return res.data;
};

const enableTable = async (table) => {
  const res = await axios.patch(
    baseUrl + "/Table/" + table + "/enable",
    {},
    config
  );
  console.log(res);
  return res.data;
};

const disableTable = async (table) => {
  const res = await axios.patch(
    baseUrl + "/Table/" + table + "/disable",
    {},
    config
  );
  console.log(res);
  return res.data;
};
const getTableReserve = async (date, time) => {
  //peticion con valor desde body
  let data = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjAwMDAwMDAxLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBbnRvbmlvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmlxdWVsbWVhbnRvbmlvOTBAZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJIQlFYRlVLT09TU0NDT0o3SEM0TEFQNlFMSlFBUFdGNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjY5NjU4Nzk0LCJpc3MiOiJsb2NhbGhvc3Q6ODA4MCIsImF1ZCI6ImxvY2FsaG9zdDo4MDgwIn0.hb4fEqF5fkNqQT0cKMQV8Ulb0gqrE4kTRZHMSiv8mO0",
    },
    params: {
      date: date.day + "-" + date.month + "-" + date.year,
      time: time.hrs + ":" + time.min,
    },
  };
  const res = await axios.get(baseUrl + "/Table/Available", data);
  console.log(res);
  return res.data;
};
const getProvider = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrl + "/Provider", config);
  return res.data;
};

const addProvider = async (provider) => {
  //peticion con valor desde body
  const res = await axios.post(baseUrl + "/Provider", provider, config);
  console.log(res);
  return res.data;
};

const getOrderProvider = async () => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrl + "/ProviderOrder/ordersInProcess",
    config
  );
  return res.data;
};

const addOrderProvider = async (provider) => {
  //peticion con valor desde body
  const res = await axios.post(baseUrl + "/ProviderOrder", provider, config);
  console.log(res);
  return res.data;
};

const setOrderProviderReceived = async (provider) => {
  //peticion con valor desde body
  const res = await axios.patch(
    baseUrl + "/ProviderOrder/" + provider + "/setReceived",
    config
  );
  console.log(res);
  return res.data;
};

const setOrderProviderCancel = async (provider) => {
  //peticion con valor desde body
  const res = await axios.patch(
    baseUrl + "/ProviderOrder/" + provider + "/cancel",
    config
  );
  console.log(res);
  return res.data;
};

export {
  getTable,
  addTable,
  editTable,
  enableTable,
  disableTable,
  getTableReserve,
  getTableid,
  getProvider,
  addProvider,
  getOrderProvider,
  addOrderProvider,
  setOrderProviderReceived,
  setOrderProviderCancel
};
