import instance from "../../api";
const getHero = async (ids) => {
  console.log("getHero ids", ids);
  const {
    data: { message, contents },
  } = await instance.get("/getHero", {
    params: {
      id: ids,
    },
  });
  console.log("getHero message", message);
  console.log("getHero", contents);
  // contents=[] if not find
  return contents;
};
export default getHero;
