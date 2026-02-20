import { Redirect } from "expo-router";
console.log("MAIN INDEX LOADED");
export default function Index() {
  return <Redirect href="/marketplace" />;
}
