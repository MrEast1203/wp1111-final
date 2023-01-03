import instance from "../../api";
const getHero = async (ids) => {
  // console.log("ids");
  const {
    data: { message, contents },
  } = await instance.get("/getHero", {
    params: {
      id: ids,
    },
  });
  // console.log("getHero", contents);
  // contents=[] if not find
  return contents;
};
export default getHero;