import instance from "../api";
const getMonster = async (id) => {
  const {
    data: { message, contents },
  } = await instance.get("/getMonster", {
    params: {
      id: id,
    },
  });
  return contents;
};

export default getMonster;
