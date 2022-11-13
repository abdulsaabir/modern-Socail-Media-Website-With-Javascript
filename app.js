import waait from "https://esm.sh/waait";
async function consollog() {
  await waait(50);
  console.log("hello");
  await waait(8000);
  console.log("jabroni");
}
consollog();
