import { Stack } from "@bedrock-layout/stack";
import { Subscribe } from "./Subscribe";
import { Menu } from "./Menu";
function App() {
  return (
    <Stack gutter="size3">
      <header>
        <h1>Coco Le Belle</h1>
      </header>
      <Menu />
      <Subscribe />
    </Stack>
  );
}

export default App;
