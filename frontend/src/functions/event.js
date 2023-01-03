import instance from "../api";
const getEvent = async (id) => {
  const {
    data: { message, contents },
  } = await instance.get("/getEvent", {
    params: {
      id: id,
    },
  });
  return contents;
};

export default getEvent;
